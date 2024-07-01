import { ReactElement, ReactNode, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, StatusBar, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Styles } from '@/constants/Styles';
import { API } from '@/constants/API';
import { LargeMButton } from '@/components/MButton';
import { Colors } from '@/constants/Colors';
import Carousel from 'react-native-reanimated-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Fontisto, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomTitleCard from '@/components/BottomTitleCard';
import LoadingImage from '@/components/LoadingImage';
import { BlurView } from 'expo-blur';
import { formatDistance } from 'date-fns';
import iconSet from '@expo/vector-icons/build/FontAwesome6';


function getImages(petID: string, setImages: (arg: string[]) => void) {
    // Retrieve pet images.
    fetch(`${API.pet}/images?id=${petID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            if (response.status == 404)
                return Promise.resolve([]);
            return Promise.reject(new Error("Failed to retrieve list of images!"));
        }
    })
    .then((json) => {
        setImages(json);
    })
    .catch((error) => {
        console.error("Failed to retrieve pet images in details.tsx", error);
    });
}

function getInfo(petID: string, setData: (arg: any) => void) {
    // Retrieve pet information.
    fetch(`${API.alert}?id=${petID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(new Error("Failed to retrieve pet information!"));
        }
    })
    .then((json) => {
        setData({
            animal: json.animal,
            breed: json.breed,
            description: json.description,
            assistance: json.assistance,
            size: json.size,
            condition: json.condition,
            more: json.more,
            timestamp: json.timestamp,
        });
    })
    .catch((error) => {
        // FIX: Suppress all TypeErrors for now, as they don't seem to do anything.
        // if (error instanceof TypeError) return;
        console.error("Failed to retrieve pet information", error);
    });
}

type SubsectionHeaderProps = {
    title: string,
    icon: ReactNode,
}

function SubsectionHeader({ title, icon }: SubsectionHeaderProps): ReactElement {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 3,
        }}>
            {icon}
            <Text style={{
                fontSize: 12,
                fontFamily: 'Inclusive-Sans',
                color: Colors.placeholder,
            }}>
                {title}
            </Text>
        </View>
    );
}

type SubsectionProps = {
    title: string,
    icon: ReactNode,
    text?: string,
}

function Subsection({ title, icon, text }: SubsectionProps): ReactElement {
    return (
        text ?
            <View style={{
                gap: 5,
            }}>
                <SubsectionHeader title={title} icon={icon}/>
                <Text style={{
                    fontSize: 14,
                    fontFamily: 'Inclusive-Sans',
                    color: 'black',
                    marginBottom: 5,
                }}>
                    {text}
                </Text>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginBottom: 10,
                    }}
                />
            </View>
        : <></>
    );
}

export default function Tab() {
    const width = Dimensions.get('window').width;
    const [images, setImages] = useState<string[]>([]);
    const [index, setIndex] = useState<number>(0);
    const [start, setStart] = useState<boolean>(false);

    const [data, setData] = useState<{
        animal: string,
        breed: string,
        description: string,
        assistance: boolean,
        size: string,
        condition: string,
        more: string,
        timestamp: string,
    }>({ animal: "", breed: "", description: "", assistance: false, size: "", condition: "", more: "", timestamp: ""});

    const params = useLocalSearchParams<{ petID: string }>();
    const petID = params.petID as string;

    const timeSince = (timestamp: string) => {
        const then = new Date(timestamp);
        return formatDistance(then, new Date(), { addSuffix: true });
      }

    if (!start) {
        getImages(petID, setImages);
        getInfo(petID, setData);
        setStart(true);
        setInterval(() => {
            getInfo(petID, setData);
            getImages(petID, setImages);
        }, 10000);
    }

    return (
        <View style={{
            flexDirection: 'column',
            flex: 1,
        }}>
            <SafeAreaView edges={['top']} style={{ backgroundColor: 'black' }}/>
            <StatusBar barStyle={'light-content'}/>
            <ScrollView style={{
                marginBottom: 10,
                flex: 1,
                alignContent: 'flex-start',
                backgroundColor: 'white',
                height: '100%',
            }}>
                <View style={[{
                    width: width,
                    height: width,
                    alignSelf: 'center',
                }, Styles.commonProp]}>
                    <Carousel
                        data={images}
                        defaultIndex={0}
                        width={width}
                        onSnapToItem={(index) => setIndex(index)}
                        renderItem={({ index }) => (
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <LoadingImage
                                    source={ images[index] }
                                    style={[{ width: width, aspectRatio: 1 }, Styles.commonProp]}
                                />
                            </View>
                        )}
                    />

                    <View style={{
                        zIndex: 1,
                        margin: 10,
                        position: 'absolute',
                    }}>
                        <TouchableOpacity 
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onPress={() => router.back()}
                        >
                            <BlurView tint="dark" intensity={65} style={[{ borderRadius: 20, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }]}>
                                <Fontisto name="close-a" size={15} color="white" />
                            </BlurView>
                        </TouchableOpacity>
                    </View>
                </View>
            
                <View style={{
                    backgroundColor: 'white',
                    height: '100%',
                    padding: 20,
                }}> 
                    <Text style={Styles.h1}>
                        {data.animal}{data.breed ? `, ${data.breed}` : ""}
                    </Text>

                    <Text style={[ Styles.text, { color: Colors.placeholder, }, ]}>
                        Reported { data.timestamp === "" ? "" : timeSince(data.timestamp) }
                    </Text>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginBottom: 10,
                        }}
                    />

                    <Subsection title="ASSISTANCE" icon={<Ionicons name="help" size={13} color={Colors.placeholder} />} text={data.assistance ? "This is an assistance animal." : ""}/>
                    <Subsection title="PET SIZE" icon={<Ionicons name="resize" size={13} color={Colors.placeholder} />} text={data.size}/>
                    <Subsection title="PET DESCRIPTION" icon={<Ionicons name="document-text" size={13} color={Colors.placeholder} />} text={data.description}/>
                    <Subsection title="PET CONDITION" icon={<Ionicons name="heart" size={13} color={Colors.placeholder} />} text={data.condition}/>
                    <Subsection title="MORE INFORMATION" icon={<Ionicons name="information-circle" size={13} color={Colors.placeholder} />} text={data.more}/>

                    <View style={{
                        marginTop: 10,
                    }}>
                    <LargeMButton
                        text="I think I've seen this pet!"
                        onPress={() => router.navigate({
                            pathname: '/sighting',
                            params: { petID: petID }
                        })}
                        fill={Colors.error}
                        textColor="white"
                        border={Colors.error}
                    />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        width: "100%",
        // height: 150,
    },
    dataStyle: {
        // flex: 1,
        // flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderColor: 'darkgrey',
        borderRadius: 10,
        padding: 5,
        // marginVertical: 8,
        marginHorizontal: 8,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 200,
        height: 200,
    },
    activeImage: {
        // Add any additional styles for the active state if needed
    },
    imageBorder: {
        position: 'absolute',
        top: -5,
        left: -5,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'red',
        opacity: 0,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
    },
});
