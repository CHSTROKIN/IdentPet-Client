import { router, useLocalSearchParams } from "expo-router";
import * as Location from 'expo-location';
import { submitImage } from './submit';
import { registerForPushNotificationsAsync } from '@/constants/Notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDeviceUUID } from '@/constants/Chat';
import { Animated, SafeAreaView, Text, View } from "react-native";
import { getObject } from "./(tabs)/report";
import { Styles } from "@/constants/Styles";
import { openBrowserAsync } from 'expo-web-browser';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { LargeMButton } from "@/components/MButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackButton } from './_layout';
import AnimatedHeader from "@/components/AnimatedHeader";
import { useRef } from "react";

const API_BASE = "https://petfinder-424117.nw.r.appspot.com";
const API_SUBMIT = `${API_BASE}/sighting`;

const fetchData = async () => {
  const storePhoneNumber = await getObject('phoneNumber');
  if (storePhoneNumber != null) {
    return storePhoneNumber;
  } else {
    return "";
  }
};

const sumbit_plain_sighting = async (uri: string, petID: string, setErrorText: (error: string) => void) => {
  const form = {
    behaviour: undefined,
    chatID: "", 
    pushToken: "",
    color: undefined,
    contactinfo: "",
    health: undefined,
    howToContact: undefined,
    id: petID == "" ? undefined : petID,
    image: "",
    location_desc: undefined,
    location_lat: 0,
    location_long: 0,
    other: undefined,
  };

  submitImage(uri, setErrorText)
  .then((json) => {
    form["image"] = json.id;
    return Location.getCurrentPositionAsync({});
  })
  .then((loc) => {
    form["location_lat"] = loc.coords.latitude;
    form["location_long"] = loc.coords.longitude;
    return fetchData(); 
  })
  .then((phoneNumber) => { 
    form["contactinfo"] = phoneNumber; 
    return registerForPushNotificationsAsync();
  })
  .then((token) => {
    form["pushToken"] = token == undefined ? "" : token;
    return getDeviceUUID();
  })
  .then((uuid) => {
    form["chatID"] = uuid;
    return fetch(API_SUBMIT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    });
  })
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      return Promise.reject(new Error("Failed to submit sighting!"));
    }
    return response.json();
  })
  .then((json) => {
    console.log("Submitted sighting!");
    if (json.matchN !== null && !Number.isNaN(parseInt(json.matchN)) && json.matchN !== undefined) {
      AsyncStorage.getItem("helped").then((curNumHelped) => {
        if (curNumHelped == null) {
          AsyncStorage.setItem("helped", json.matchN);
        } else {
          AsyncStorage.setItem("helped", (parseInt(curNumHelped) + parseInt(json.matchN)).toString());
        }
      });
    }
  })
  .catch((error: string) => {
    console.log(error);
      setErrorText("Network Error!");
  });
}

export default function Tab() {
  const params = useLocalSearchParams<{ photo_uri: string, petID?: string }>() as { photo_uri: string, petID: string };
  const insets = useSafeAreaInsets();
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <View style={[Styles.container_outermost, { paddingTop: insets.top, paddingBottom: insets.bottom } ]}>
      <AnimatedHeader 
        animatedValue={offset} 
        title="" 
        leftHeader={BackButton} 
      />
        <View style={{
          padding: 20,
        }}>
          <View style={{
            gap: 10,
            justifyContent: 'space-between',
            height: '100%',
          }}>
            <View style={{
              marginTop: 100,
              gap: 10,
            }}>
              <Ionicons name="checkmark-circle" size={50} color={Colors.emph}/>
              <Text style={Styles.h1}>
                Thanks for helping.
              </Text>
              <Text style={Styles.h1}>
                Please add more information.
              </Text>
              <Text style={[Styles.h2, { marginTop: 20,  }]}>
                Either submit the photo with your current location now or add more information about the sighting to help with the search.
              </Text>

            </View>

            <View style={{
              gap: 10,
            }}>
              <LargeMButton 
                text="Skip and Submit" 
                onPress={() => {
                  sumbit_plain_sighting(params.photo_uri, params.petID == undefined ? "" : params.petID, () => {});
                  router.navigate({
                    pathname: '/',
                    params: {
                      'helpedID': Date.now().toString(),
                  }});
                }}
                fill={'white'}
                textColor={Colors.emph}
                border={Colors.emph}
                />

              <LargeMButton 
                text="Add more information" 
                onPress={() => {
                  router.navigate({
                    pathname: '/submit',
                    params: {
                      uri: params.photo_uri,
                      petID: params.petID
                  }});
                }}
                fill={Colors.emph}
                textColor="white"
                
                />
              </View>
            </View>
          </View>
    </View>
  );

}