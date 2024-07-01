import { useLocalSearchParams } from 'expo-router';
import { View, Text, Animated } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Styles } from '@/constants/Styles';
import AnimatedHeader, { HEADER_HEIGHT } from '@/components/AnimatedHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackButton } from './_layout';
import SightingCard from '@/components/SightingCard';

export type SightingReport = {
    image?: string,
    locationLat: number,
    locationLon: number,
    specificLocation?: string,
    breed?: string,
    colour?: string,
    behaviour?: string,
    health?: string,
    other?: string,
    phoneNumber?: string,
    message?: string,
    timestamp: string,
    chat_id?: string,
    index: number,
    pet_id: string
}

const getPetIdFromNum = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return JSON.parse(jsonValue as string).petID;
    } catch (e) {
        console.error("Error retrieving the object", e);
    }
}


async function fetchReportsFromApi(petNum: string, setter: (arg: SightingReport[]) => void) {
    const petID: string = await getPetIdFromNum(petNum);
    fetch(`https://petfinder-424117.nw.r.appspot.com/pet/alert?id=${petID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject("Failed to fetch sightings from the server.");
        }
    })
    .then((json) => {
        if (!json.sightings) json.sightings = [];
        setter(json.sightings.map((item: any, index: number) => {
            {
                return {
                    image: item.image_url,
                    locationLat: item.location_lat,
                    locationLon: item.location_long,
                    specificLocation: item.specific_location,
                    breed: item.breed,
                    colour: item.colour,
                    behaviour: item.behaviour,
                    health: item.health,
                    other: item.other,
                    phoneNumber: item.contactinfo,
                    timestamp: item.timestamp,
                    message: item.message,
                    chat_id: item.chat_id,
                    index: index,
                    pet_id: petID
                };
            }
        }));
    })
    .catch((error) => {
        console.error("Failed to retrieve sightings.", error);
    });
}

export default function Tab() {
    const params = useLocalSearchParams<{ petNum: string }>() as { petNum: string };
    const [intervalStatus, setIntervalStatus] = useState(false);
    const [sightings, setSightings] = useState<SightingReport[]>([]);

    useEffect(() => {
        const intervalID = setInterval(() => fetchReportsFromApi(params.petNum, setSightings), 3000);
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    // if (!intervalStatus) {
    //     fetchReportsFromApi(params.petNum, setSightings);
    //     setInterval(() => fetchReportsFromApi(params.petNum, setSightings), 3000);
    //     setIntervalStatus(true);
    // }

    const offset = useRef(new Animated.Value(0)).current;
    const insets = useSafeAreaInsets();

    console.log(sightings)

    return (
        <View style={Styles.container_outermost}>
            <AnimatedHeader animatedValue={offset} title="Sightings" leftHeader={BackButton}/>
            <ScrollView 
                style={{
                    paddingTop: insets.top,
                    width: '100%',
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
            >
                <Text style={[{ paddingTop: HEADER_HEIGHT, paddingBottom: 20, marginHorizontal: 20, }, Styles.h1]}>Sightings</Text>
                {
                    sightings.reverse().map((item, index) =>
                            <SightingCard
                                key={index}
                                sighting={item}
                                petNum={params.petNum}
                            />
                    )
                }
                <View style={{ marginBottom: insets.bottom + 100 }}/>
            </ScrollView>
        </View>
    );
}
