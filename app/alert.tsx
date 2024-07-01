import Form, { FieldTypes, formOnClick } from '@/components/Form';
import { useEffect, useRef, useState } from 'react';
import { View, Text, Platform, Animated } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { ItemProps } from './(tabs)/report';

const API_BASE = "https://petfinder-424117.nw.r.appspot.com";
const API_PET = `${API_BASE}/pet`;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Styles } from '@/constants/Styles';
import { ScrollView } from 'react-native-gesture-handler';

import * as Notifications from 'expo-notifications';
import { SafeAreaView } from 'react-native-safe-area-context';

import AnimatedHeader, { HEADER_HEIGHT } from '@/components/AnimatedHeader';
import MButton from '@/components/MButton';
import { Colors } from '@/constants/Colors';
import { BackButton } from './_layout';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function handleRegistrationError(errorMessage: string) {
  alert(errorMessage);
  throw new Error(errorMessage);
}

// async function registerForPushNotificationsAsync() {
//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       handleRegistrationError('Permission not granted to get push token for push notification!');
//       return;
//     }
//     const projectId =
//       Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
//     if (!projectId) {
//       handleRegistrationError('Project ID not found');
//     }
//     try {
//       const pushTokenString = (
//         await Notifications.getExpoPushTokenAsync({
//           projectId,
//         })
//       ).data;
//       return pushTokenString;
//     } catch (e: unknown) {
//       handleRegistrationError(`${e}`);
//     }
//   } else {
//     handleRegistrationError('Must use physical device for push notifications');
//   }
// }

import { registerForPushNotificationsAsync } from '@/constants/Notifications';

const getObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue
  } catch (e) {
    console.error("Error retrieving the object", e);
  }
}

async function setMissing(petIDNum: string) {

  const petObject = await getObject(petIDNum);
  if (petObject == null) {
    console.error("Pet object not found");
    return;
  }
  const jpetObject: ItemProps = JSON.parse(petObject);

  const newjpetObject: ItemProps = JSON.parse(JSON.stringify({
    ...jpetObject,
    isMissing: true
  }));

  await AsyncStorage.setItem(petIDNum, JSON.stringify(newjpetObject));
  return {
    id: newjpetObject.petID,
    name: newjpetObject.name,
    animal: newjpetObject.animal,
    breed: newjpetObject.breed,
    description: newjpetObject.description,
    assistance: newjpetObject.assistance,
    size: newjpetObject.size,
  };

}

export default function Tab() {

  let params = useLocalSearchParams<{ petNum: string }>();

  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>([]);
  const [expoPushToken, setExpoPushToken] = useState<string>('');
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(
    undefined
  );
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then(token => setExpoPushToken(token ?? ''))
      .catch((error: any) => setExpoPushToken(`${error}`));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const states = {} as Record<string, {value: string, setter: (arg: any) => void}>;

  const callback = async ( 
    form: Record<string, any>, 
    submitForm: ( url: string, method: string, moreData?: Record<string, any> ) 
        => Promise<Response> 
  ) => {
    setMissing(params.petNum == null ? "0" : params.petNum)
      .then((data) => {
        return submitForm(
          "https://petfinder-424117.nw.r.appspot.com/pet/alert",
          "POST", {
          ...data,
          push_token: expoPushToken,
        }
        );
      })
      .then((response) => {
        if (response.ok) {
          router.navigate({
            pathname: "/report"
          });
        } else {
          return Promise.reject("Failed to report that a pet has gone missing!");
        }
      })
      .catch((error) => {
        console.error("Failed to report that a pet has gone missing!", error);
      });
  };

  const onSubmit = formOnClick( {states, callback } );
  const offset = useRef(new Animated.Value(0)).current;
  const headerSubmit = <MButton text="Submit" onPress={onSubmit} textColor={Colors.nuit} right={true} />

  return (
      <View style={Styles.container_modal_outermost}>
        <AnimatedHeader animatedValue={offset} title={"Report a missing pet"} leftHeader={BackButton} rightHeader={headerSubmit}/>
        <ScrollView
          style={{
            paddingHorizontal: 20,
          }}
          onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: offset } } }],
              { useNativeDriver: false }
          )}
        > 
          <SafeAreaView style={{ flex: 1, paddingBottom: 40 }}>
            <View style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingTop: HEADER_HEIGHT, 
              paddingBottom: 20
            }}>
              <Text style={Styles.h1}>Report a missing pet</Text>
              <Text style={[{ marginBottom: 5, }, Styles.text]}>Please add some information about your pet.</Text>
            </View>
            <Form
              states={states}
              onSubmit={onSubmit}
              fields={{
                "location": {
                  label: "Where did it go missing?",
                  fieldType: FieldTypes.LOCATION,
                  placeholder: "Location",
                },
                "condition": {
                  label: "What was the pet's condition?",
                  fieldType: FieldTypes.LONG_TEXT,
                  placeholder: "Was it healthy? Injured?",
                },
                "more": {
                  label: "Additional information",
                  fieldType: FieldTypes.LONG_TEXT,
                  placeholder: "Any additional information that could help find the pet.",
                },
              }}
              
              shortLabelStyle={Styles.form_labelStyle}
              shortFieldStyle={Styles.form_fieldStyle}
              shortFieldContainerStyle={Styles.form_fieldContainerStyle}
              shortContainerStyleF={Styles.form_shortContainerStyleF}
              shortContainerStyleM={Styles.form_shortContainerStyleM}
              shortContainerStyleL={Styles.form_shortContainerStyleL}
              shortContainerStyleS={Styles.form_shortContainerStyleS}

              longLabelStyle={Styles.form_longLabelStyle}
              longFieldStyle={Styles.form_longFieldStyle}
              longContainerStyle={Styles.form_longContainerStyle}
              longFieldContainerStyle={Styles.form_longFieldContainerStyle}
            />
            </SafeAreaView>
        </ScrollView>
      </View>
      
  );
}