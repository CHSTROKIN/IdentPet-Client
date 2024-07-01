import { router } from 'expo-router';

import { AntDesign, FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";

import { View, Text, StyleSheet, Button, Platform, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import { Image } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import AnimatedHeader, { HEADER_HEIGHT } from '@/components/AnimatedHeader';

// npx expo install @react-native-async-storage/async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

import MButton from '@/components/MButton';
import { Styles } from '@/constants/Styles';
import { Colors } from '../../constants/Colors';
import { Animated } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
const API_BASE = "https://petfinder-424117.nw.r.appspot.com";
const API_PET = `${API_BASE}/pet`;
const API_IMAGE = `${API_BASE}/image`;

// export type ItemProps = {name: string, type: string, petID: string, isMissing: boolean, petNum: string};
export type ItemProps = {
    name: string,
    animal: string,
    breed: string,
    description: string,
    assistance: boolean,
    petID: string,
    isMissing: boolean,
    petNum: string,
    size: string,
};

function MyImage(props: { petID: string, source: any }) {
    const [imageSource, setImageSource] = useState<string>("");
    if (props.source == null) {
        return (
            <Image
                style={styles.petImage}
                source={props.source}
            />
        );
    } else {
        fetch(`${API_PET}/images?id=${props.petID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => {
                if (!response.ok) {
                    console.error("Failed to retrieve image");
                    return <Image style={styles.petImage} source={props.source} />;
                } else {
                    return response.json();
                }
            }).then((json) => {
                setImageSource(json[0]);
                return (
                    <Image
                        style={styles.petImage}
                        source={{ uri: json[0] }}
                    />
                );
            }).catch((error) => {
                console.error("Failed to retrieve image in MyImage with report.tsx", error);
            });
    }
    return (
        <Image
            style={styles.petImage}
            source={imageSource ? { uri: imageSource } : props.source}
        />
    );
}
MyImage.defaultProps = {
    source: { uri: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Missing.png' }

}
export const getObject = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue
    } catch (e) {
        console.error("Error retrieving the object", e);
    }
}


export async function setFound(petIDNum: string) {

    const petObject = await getObject(petIDNum);
    if (petObject == null) {
        console.error("Pet object not found");
        return;
    }
    const jpetObject = JSON.parse(petObject);

    const newjpetObject = JSON.parse(JSON.stringify({
        ...jpetObject,
        isMissing: false
    }));
    await AsyncStorage.setItem(petIDNum, JSON.stringify(newjpetObject));

    fetch(`${API_PET}/found`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: newjpetObject.petID
        })
    })
        .then((response) => {
            if (response.ok) {
            } else {
                console.error("Failed to submit pet found!");
                console.error(response);
            }
        })
        .catch((error) => {
            console.error("Failed to submit pet found in report.tsx!", error);
        });

}


export async function localDelete(petNum: string, petId: string) {

    const currentNum = await getPetIdNum();

    // api call to delete petId

    // remove from local storage
    for (let i = parseInt(petNum) + 1; i < parseInt(currentNum); i++) {

        const petObject = await getObject(i.toString());
        if (petObject != null) {
            await AsyncStorage.setItem((i - 1).toString(), petObject);
        } else {
            await AsyncStorage.removeItem((i - 1).toString());
        }

    }

    await AsyncStorage.setItem("petNum", (parseInt(currentNum) - 1).toString());
}

async function fetchPetsFromApi(setUri: (uri: string) => void, petID: string) {
    fetch(`${API_PET}/images?id=${petID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((response) => {
            if (!response.ok) {
                return JSON.stringify(["https://upload.wikimedia.org/wikipedia/commons/7/75/Missing.png"])
            } else {
                return response.json();
            }
        }).then((json) => {
            setUri(json[0]);
        })
        .catch((error) => {
            console.error("Failed to retrieve image in fetchPetsFromApi in report.tsx", error);
        });
}

const Item = (item: ItemProps, key?: number) => {
    const [refresh, setRefresh] = useState<boolean>(false);
    const [uri, setUri] = useState<string>("https://upload.wikimedia.org/wikipedia/commons/7/75/Missing.png");
    if (!refresh) {
        fetchPetsFromApi(setUri, item.petID);
        setInterval(() => fetchPetsFromApi(setUri, item.petID), 3000);
        setRefresh(true);
    }
    return (
        <View style={[{
            padding: 5,
            backgroundColor: '#fff',
            borderColor: Colors.edge,
            borderWidth: 1,
            borderRadius: 15,
            marginHorizontal: 20,
        }, Styles.commonProp]}>
            <View style={[{
                width: '100%',
                height: 250,
                marginBottom: 5,
            }, Styles.commonProp]}>
                <ImageBackground
                    source={{ uri }}
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%' }}
                    imageStyle={{ borderRadius: 10, marginBottom: 10 }}
                >
                    <View style={{
                        justifyContent: 'flex-start',
                        alignSelf: 'flex-end',
                        padding: 5,
                        height: '100%',
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignSelf: 'flex-start',
                        }}>
                            <MButton
                                text="Edit"
                                onPress={() =>
                                    getObject(item.petNum).then((petObject) => {
                                        router.navigate({
                                            pathname: "/pet",
                                            params: {
                                                petID: item.petID,
                                                petNum: item.petNum,
                                                petObject: petObject,
                                                timestamp: new Date().getTime().toString()
                                            }
                                        })
                                    }).catch(console.error)
                                }
                                fill='#fff'
                                border='#000'
                                textColor='#000'
                                icon={<FontAwesome name="edit" size={13} color="black" />}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <View>
                <View style={{
                    flex: 1,
                    width: '100%',
                    paddingLeft: 5,
                    paddingTop: 2.5,
                }}>
                    {item.name ? <Text style={Styles.h15}>{item.name}</Text> : null}
                    {item.animal ? <Text style={{
                        fontFamily: 'Inclusive-Sans',
                        fontSize: 15,
                    }}>{item.animal}</Text>
                                 : null
                    }
                    {item.breed ? <Text style={{
                        fontFamily: 'Inclusive-Sans',
                        fontSize: 15,
                    }}>{item.breed}</Text>
                                : null
                    }
                </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                        paddingBottom: 5,
                        gap: 5,
                        width: '100%',
                    }}>
        {
                    item.isMissing &&
                    <View>
                        <MButton
                            text="View Reports"
                            onPress={() => router.navigate({
                                pathname: "/found",
                                params: {
                                    petNum: item.petNum
                                }
                            })}
                            fill='white'
                            border='black'
                            icon={<Ionicons name="eye-outline" size={15} color="black" />}
                        />
                    </View>
                }

                {
                    item.isMissing
                        ? <MButton
                            text="Report Found"
                            onPress={() => {
                                setFound(item.petNum);
                                item.isMissing = false;
                            }}
                            fill='white'
                            textColor={Colors.emph}
                            border={Colors.emph}
                            icon={<AntDesign name="check" size={15} color={Colors.emph}/>}
                        />
                        : <MButton
                            text="Report Missing"
                            onPress={() => router.navigate({
                                pathname: "/alert",
                                params: {
                                    petNum: item.petNum
                                }
                            })}
                            fill='white'
                            textColor={Colors.error}
                            border={Colors.error}
                            icon={<FontAwesome name="exclamation-triangle" size={13} color={Colors.error} />}
                        />

                } 
                    </View>

            </View>

        </View>
    );
}

async function fetchPetsFromLocalStorage(setPets: (pets: ItemProps[]) => void) {
    const petNum = await AsyncStorage.getItem("petNum");
    if (petNum == null) {
        storeData("petNum", "0");
        return;
    }
    const pets = [];
    for (let i = 0; i < parseInt(petNum); i++) {
        const petObject = await getObject(i.toString());
        if (petObject != null) {
            pets.push(JSON.parse(petObject));
        }

    }
    setPets(pets);
}

export const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.error(e);
    }
}

const getPetIdNum = async () => {
    try {
        const value = await AsyncStorage.getItem("petNum")
        if (value !== null) {
        } else {
            storeData("petNum", "0");
        }
        return value == null ? "0" : value;
    } catch (e) {
        console.error(e);
        return "0";
    }
}

const getNewPetIdNum = async () => {
    const petNum = await getPetIdNum();
    // storeData("petNum", (parseInt(petNum) + 1).toString());
    return petNum;
}

export const addClick = () => {
    getNewPetIdNum().then((petNum) =>
        router.navigate({
            pathname: "/pet",
            params: {
                petID: uuidv4(),
                petNum: petNum,
                petObject: null,
                timestamp: new Date().getTime().toString()
            }
        })).catch(console.error);
}

export default function Tab() {

    const [intervalStatus, setIntervalStatus] = useState(false);
    const [pets, setPets] = useState<ItemProps[]>([]);

    if (!intervalStatus) {
        fetchPetsFromLocalStorage(setPets);
        setInterval(() => fetchPetsFromLocalStorage(setPets), 1000);
        setIntervalStatus(true);
    }

    const tabBarHeight = useBottomTabBarHeight(); 
    const offset = useRef(new Animated.Value(0)).current;
    const insets = useSafeAreaInsets();

    const addButton = 
        <MButton
            text="Add Pet"
            onPress={() => addClick()}
            fill={Colors.emph}
            textColor={'white'}
            icon={<View style={{ marginRight: 2.5, }}><FontAwesome6 name="plus" size={13} color="white"/></View>}
            larger={true}
        />;
        // <TouchableOpacity 
        //     style={{
        //         backgroundColor: Colors.emph,
        //         width: 30,
        //         height: 30,
        //         borderRadius: 15,
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //     }}
        //     onPress={() => addClick()}
        //     >
        //     <FontAwesome6 name="plus" size={15} color="white" />
        // </TouchableOpacity>;
    
    const addButtonHeader = 
        <TouchableOpacity 
            style={{
                backgroundColor: Colors.emph,
                width: 25,
                height: 25,
                borderRadius: 12.5,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onPress={() => addClick()}
            >
            <FontAwesome6 name="plus" size={12.5} color="white" />
        </TouchableOpacity>;

    return (
        <View style={Styles.container_outermost}>
            <StatusBar barStyle={'dark-content'} />
            <AnimatedHeader animatedValue={offset} title="My Pets" rightHeader={addButtonHeader} rightHeaderAnimateIn={true} />
            <ScrollView 
                style={[{
                    paddingTop: insets.top,
                }, styles.list]}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: HEADER_HEIGHT, 
                    paddingBottom: 20,
                    marginHorizontal: 20,
                }}>
                    <Text style={[Styles.h1]}>My Pets</Text>
                    {addButton}
                </View>
                
                {pets.map((item, key) => <Item {...item} key={key} />)}
                <SafeAreaView style={{ paddingBottom: tabBarHeight + insets.bottom }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    list: {
        width: "100%",
        marginVertical: 10,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: Colors.edge,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    petImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    button_container: {
        flex: 1,
        flexBasis: 'auto',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: '100%',
    },

    withBottomMargin: {
        marginBottom: 10
    },

    imageContainer: {
        marginRight: 10
    },
});