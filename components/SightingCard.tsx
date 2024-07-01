import { ReactElement, useState } from "react";
import { SightingReport } from "@/app/found";
import { Styles } from "@/constants/Styles";
import { Linking, Platform, Text, TouchableHighlight, View } from "react-native";
import { Colors } from "@/constants/Colors";
import LoadingImage from "./LoadingImage";
import MapView, { Marker } from "react-native-maps";
import MButton, { LargeMButton } from "./MButton";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { router } from "expo-router";
import { API } from "@/constants/API";
import { setFound } from "@/app/(tabs)/report";

const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
const label = "Pet Went Missing Here";
const url = (latLng: string) => Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
    default: `${scheme}${latLng}`
  });

function maybeUnknownView(label: string, value: string | undefined, flex: number | undefined): (JSX.Element | undefined) {
  if (value !== undefined && value !== null && value !== "") {
      return (
          <View 
            style={[{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignContent: 'space-between',
              borderRadius: 10,
              padding: 7.5,
              backgroundColor: Colors.formField,
              borderWidth: 0.5,
              borderColor: Colors.edge,
              overflow: 'hidden',
              flex: flex ? flex : 1,
            }]}
          >
              <Text style={Styles.text}>{value}</Text>
              <Text style={{ fontFamily: 'Inclusive-Sans', fontSize: 13 }}>{label}</Text>
          </View>
      );
  } else {
      return;
  }
}

export default function SightingCard({ sighting, petNum }: { sighting: SightingReport, petNum: string }): ReactElement {
  const [moreInfo, setMoreInfo] = useState<boolean>(false);

  const anyInfoExists = sighting.phoneNumber || sighting.specificLocation || sighting.breed || sighting.colour || sighting.behaviour || sighting.health || sighting.other;

  const timeSince = (timestamp: string) => {
    const then = new Date(timestamp);
    return formatDistance(then, new Date(), { addSuffix: true });
  }

  return(
    <View 
      style={[{
        borderWidth: 1,
        borderColor: Colors.edge,
        backgroundColor: Colors.modal_background,
        paddingVertical: 5,
        borderRadius: 15,
        marginBottom: 10,
        paddingHorizontal: 5,
        marginHorizontal: 20,
      }, Styles.commonProp]}
    >
      <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            borderRadius: 10,
            gap: 5,
        }}
      >
        <View
            style={{
                flex: 1,
                borderRadius: 10,
                borderColor: Colors.edge,
                borderWidth: 0.5,
            }}
        >
          <LoadingImage source={ sighting.image ? sighting.image! : "https://upload.wikimedia.org/wikipedia/commons/7/75/Missing.png" } style={{ width: '100%', aspectRatio: 1 }} borderRadius={10} />
        </View>

        <View style={{
          flex: 1,
          flexGrow: 1
        }}>
          <TouchableHighlight 
            style={{
              borderRadius: 10,
              flex: 1,
              alignItems: 'center',
            }} 
            onPress={() => Linking.openURL(url(`${sighting.locationLat},${sighting.locationLon}`))}
          >
            <View>
              <View 
                style={{
                  flexGrow: 1,
                  width: '100%',
                  alignSelf:'stretch',
                  backgroundColor: Colors.formField,
                  borderWidth: 0.5,
                  borderColor: Colors.edge,
                  borderRadius: 10,
                  alignItems: 'center',
                  flexDirection: 'column',
                  flex: 5,
                  overflow: 'hidden',
                }}
              >
                
                <MapView
                  pitchEnabled={false}
                  rotateEnabled={false}
                  scrollEnabled={false}
                  zoomEnabled={false}
                  initialRegion={{
                    latitude: sighting.locationLat as number,
                    longitude: sighting.locationLon as number,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0021,
                  }} 
                  style={{ 
                    alignSelf:'stretch',
                    width: '100%', 
                    aspectRatio: 1,
                    borderColor: Colors.edge,
                    flex: 1
                  }}
                >
                  <Marker 
                    coordinate={{ latitude: sighting.locationLat as number, longitude: sighting.locationLon as number }}
                  />
                </MapView>
              </View>
            </View>
          </TouchableHighlight>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
          </View>
        </View>
      </View>
      <View style={{
        alignContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <View style={{
          width: '100%'
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 5,
            marginTop: 5,
          }}>
            <View style={{
            }}>
              <MButton 
                text="Chat"
                icon={
                  <AntDesign name="message1" size={12} color={Colors.nuit}/>
                }
                fill={'white'}
                border={Colors.nuit}
                textColor={Colors.nuit}
                onPress={() => router.navigate({
                  pathname: "/chat",
                  params: {
                    targetID: sighting.chat_id
                  }
                })}
              />
            </View>
            <View>
              <MButton
                text="This is not my pet"
                icon={
                  <AntDesign name="close" size={12} color={Colors.error}/>
                }
                fill={'white'}
                border={Colors.error}
                textColor={Colors.error}
                onPress={() => {
                  console.log("Trying to unsight!", API.unsight, sighting.pet_id, sighting.index)
                  fetch(API.unsight, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      id: sighting.pet_id,
                      sighting_index: sighting.index
                    })
                  })
                  .then((response) => {
                    if (response.ok) {
                      console.log("Unsighted!")
                    } else {
                      console.error("Error unsighting", response)
                    }
                  });
                }}
              />
              
              </View>
              <View>
                <MButton
                  text="This is my pet"
                  icon={
                    <AntDesign name="check" size={12} color={Colors.emph}/>
                  }
                  fill={'white'}
                  border={Colors.emph}
                  textColor={Colors.emph}
                  onPress={() => {
                    setFound(petNum);
                    router.navigate({ pathname: "/(tabs)/report" });
                  }}
                />
              </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <View>
              <Text style={{
                fontFamily: 'Inclusive-Sans',
                alignSelf:'flex-end',
                color: Colors.placeholder,
                fontSize: 10,
                marginTop: 2.5,
                marginBottom: 2.5,
              }}>
                { timeSince(sighting.timestamp) } - { sighting.timestamp ? new Date(sighting.timestamp).toLocaleString("en-GB", { day: '2-digit', month: 'short', year: '2-digit', hour12: true, minute: '2-digit', hour: '2-digit' }) : "Unknown Time" }
              </Text>
            </View>
            { anyInfoExists ?
              <MButton
                text={"More info"}
                right={true}
                icon={moreInfo ? <Entypo name="chevron-thin-down" size={12} color={Colors.nuit}/> : <Entypo name="chevron-thin-right" size={12} color={Colors.nuit}/>}
                onPress={() => {setMoreInfo(!moreInfo)}}
              />
              : null
            }
          </View>
        </View>
      </View>
      
      { moreInfo ? 
          <View style={{ marginTop: 5, gap: 5 }}>
            <View style={{ flexDirection: 'row', gap: 5}}>
              {maybeUnknownView("Message", sighting.message, 2)}
              <View style={{ flex: 1 }}>
                { sighting.phoneNumber ?
                  <TouchableHighlight style={{ borderRadius: 10, flex: 1 }} onPress={() => Linking.openURL("tel:" + sighting.phoneNumber!)}>
                      {maybeUnknownView("Contact information", sighting.phoneNumber, 1)}
                  </TouchableHighlight>
                  : null
                }
                
              </View>
              {maybeUnknownView("Specific Location", sighting.specificLocation, 1)}
            </View>

            <View style={{ flexDirection: 'row', gap: 5 }}>
              {maybeUnknownView("Breed", sighting.breed, 2)}
              {maybeUnknownView("Colour", sighting.colour, 1)}
            </View>
            {maybeUnknownView("Behaviour", sighting.behaviour, 1)}
            {maybeUnknownView("Health", sighting.health, 1)}
            {maybeUnknownView("Other", sighting.other, 1)}
          </View>
        : null
      }
    </View>
  );
}