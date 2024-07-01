import { View, Text, StyleSheet, Image, Button, Platform, Animated, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState, useRef, useEffect } from 'react';
import { router } from 'expo-router';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';
import { storeData } from './report';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { useLocalSearchParams } from 'expo-router';
import { startOfYear, differenceInCalendarDays } from 'date-fns';

import ImageCard from '@/components/ImageCard';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AnimatedHeader, { HEADER_HEIGHT } from '@/components/AnimatedHeader';
import { API } from '@/constants/API';
import MButton from '@/components/MButton';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const getCurrentWeek = () => {
  const now = new Date();
  const startOfYearDate = startOfYear(now);
  const daysSinceStartOfYear = differenceInCalendarDays(now, startOfYearDate);
  const currentWeek = Math.ceil((daysSinceStartOfYear + 1) / 7);
  return currentWeek;
};

type ItemProps = { name: string, animal: string, image: string, breed: string, pet_id: string };

function fetchNearbyPetsFromApi(setMissing: (pets: ItemProps[]) => void, loc_lat: number, loc_long: number) {
    fetch(`${API.nearby}?location_lat=${loc_lat}&location_long=${loc_long}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error("Failed to retrieve nearby pets!");
                return Promise.reject(new Error("Failed to retrieve nearby pets!"));
            }
        })
        .then((json) => {
            setMissing(json);
        })
        .catch((error) => console.error("Failed to retrieve nearby pets in index.tsx!", error));
}

export async function getHelped(setHelped: (helped: string) => void, setHelpedStatus: (status: boolean) => void) {
    try {
        const v = async () => {
            const value = await AsyncStorage.getItem("currentWeek")
            if (value == null) {
                storeData("currentWeek", getCurrentWeek().toString());
                return getCurrentWeek().toString();
            } 
            return value;
        }
        const currentWeek = await v();
        const sameWeek: boolean = parseInt(currentWeek) == parseInt(getCurrentWeek().toString());
        if (!sameWeek) {
            storeData("currentWeek", getCurrentWeek().toString());
            storeData("helped", "0");
            setHelped("It seems you haven't helped any searches this week. Start to help by reporting sightings now!");
        } else {
            const helped = await AsyncStorage.getItem("helped");
            if (helped == null || helped == "0") {
                storeData("helped", "0");
                setHelped("It seems you haven't helped any searches this week. Start to help by reporting sightings now!");
            } else {
                setHelped("You have helped " + helped + " searches this week!");
            }
        }
        setHelpedStatus(true);
    } catch (e) {
        console.error("Failed to retrieve helped pets!");
    }

}

export default function Tab() {

    let params = useLocalSearchParams<{ helpedID: string }>();

    const [intervalStatus, setIntervalStatus] = useState(false);
    const [missing, setMissing] = useState<ItemProps[]>([]);
    const [helped, setHelped] = useState<string>("It seems you haven't helped any searches this week. Start to help by reporting sightings now!");
    const [helpedStatus, setHelpedStatus] = useState(false);
    const [helpedID, setHelpedID] = useState<string>("");

    if (params.helpedID !== undefined && params.helpedID !== helpedID) {
        getHelped(setHelped, setHelpedStatus);
        setHelpedID(params.helpedID == null ? "" : params.helpedID);
    }

    if (!helpedStatus) {
        getHelped(setHelped, setHelpedStatus);
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            Location.getCurrentPositionAsync({}).then((loc) => {

                if (!intervalStatus) {
                    fetchNearbyPetsFromApi(setMissing, loc.coords.latitude, loc.coords.longitude);
                    setInterval(() => fetchNearbyPetsFromApi(setMissing, loc.coords.latitude, loc.coords.longitude), 3000);
                    setInterval(() => getHelped(setHelped, setHelpedStatus), 3000);
                    setIntervalStatus(true);
                }
            }).catch(console.error);
        })();
    }, []);


    const offset = useRef(new Animated.Value(0)).current; 

    const headerRightView = (
        <View style={styles.details_button_container}>
            <MButton text="" onPress={() => {
                router.navigate("/chat")
            }} icon={
                <AntDesign name="message1" size={24} color="black" />
            }/>
        </View>
    )

    return (
        <SafeAreaProvider>
            <View style={Styles.container_outermost}>
                <StatusBar barStyle={'dark-content'} />
                <AnimatedHeader
                 animatedValue={offset}
                 title="Community"
                 rightHeader={headerRightView}
                />
                <ScrollView 
                    style={[styles.list]}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: offset } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <SafeAreaView style={{
                        paddingBottom: 80,
                    }}>
                        <View style={{
                            marginHorizontal: 20,
                        }}>
                            <Text style={[{ paddingTop: HEADER_HEIGHT, paddingBottom: 20 }, Styles.h1]}>Community</Text>
                            <View style={[Styles.commonProp, styles.banner]}>
                                <Text style={styles.bannerText}>{helped}</Text>
                            </View>
                        </View>
                        {missing.reverse().map( (item, index) =>
                        <View style={{ marginHorizontal: 20, }} key={index}>
                            <ImageCard
                                    uri={item.image}
                                    text={item.breed}
                                    onPress={() => router.navigate({
                                        pathname: '/details',
                                        params: { petID: item.pet_id }
                                    })}
                                    style={{ width: '100%', height: 250 }}
                                /> 
                        </View>
                        )}

                        <View style={{
                            padding: 20,
                        }}>
                            <Text style={{
                                paddingLeft: 5,
                                color: Colors.placeholder,
                                fontFamily: 'Inclusive-Sans',
                            }}>
                            IdentAPet does not assume ownership of nor responsibility for the accuracy, appropriateness, or legality of any images, text, or other content uploaded by users.
                            </Text>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: "100%",
        marginVertical: 10,
    },
    banner: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        borderColor: Colors.nuit,
        borderWidth: 1,
    },
    bannerText: {
        color: Colors.nuit,
        fontFamily: 'Inclusive-Sans',
        textAlign: 'center',
        fontSize: 16,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: 'darkgrey',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    details_button_container: {
        flex: 1,
        flexBasis: 'auto',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height: '100%',
    },
    right: {
        marginLeft: 20,
        flex: 1,
        flexDirection: 'column',
    },
    name: {
        fontSize: 32,
    },
    type: {
        fontSize: 16,
    },
    thumbnail: {
        width: 100,
        height: 100,
    },
});
