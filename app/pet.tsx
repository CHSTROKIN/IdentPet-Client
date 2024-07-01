import { Image, Text, View, StyleSheet, TextInput, Dimensions, Animated, TouchableHighlight } from 'react-native';

import { CheckBox } from 'react-native-elements';

import { router, useLocalSearchParams } from 'expo-router';
import { useState, useRef, ReactElement } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Styles } from '@/constants/Styles';

import { getObject, localDelete, setFound } from './(tabs)/report';

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { ItemProps } from './(tabs)/report';

// npx expo install @react-native-async-storage/async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import MButton, { LargeMButton } from '@/components/MButton';
import { FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons';


import Carousel from 'react-native-reanimated-carousel';
import LoadingImage from '@/components/LoadingImage';
import AnimatedHeader, { HEADER_HEIGHT } from '@/components/AnimatedHeader';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackButton } from './_layout';
import PickerField from '@/components/PickerField';
import { Colors } from '@/constants/Colors';


const API_BASE = "https://petfinder-424117.nw.r.appspot.com";
const API_PET = `${API_BASE}/pet`;
const API_IMAGE = `${API_BASE}/image`;


type PetImageProps = { uri: string };
const PetImageItem = ({ uri }: PetImageProps) => {
    const [active, setActive] = useState(false);

    return (
        <View style={styles.imageContainer}>
            {active && <View style={styles.imageBorder} />}
            <Image
                source={{ uri: uri }}
                style={[styles.image, active && styles.activeImage]}
            />
        </View>
    );
};


type PetFieldProps = {
    setter: (arg: string) => void,
    label: string,
    reference: React.RefObject<TextInput>,
    styleOuter?: any,
}

const PetField = ({ setter, label, reference, styleOuter }: PetFieldProps) => (
    <View style={styleOuter}>
        <Text style={Styles.form_labelStyle}>{label}</Text>
        <View style={Styles.form_fieldContainerStyle}>
            <TextInput
                placeholder={label}
                placeholderTextColor={Colors.placeholder}
                style={Styles.form_fieldStyle}
                onChangeText={setter}
                ref={reference}
            />
        </View>
    </View>
);
const PetDescField = ({ setter, label, reference }: PetFieldProps) => (
    <View style={Styles.form_longContainerStyle}>
        <Text style={Styles.form_longLabelStyle}>{label}</Text>
        <View style={Styles.form_longFieldContainerStyle}>
            <TextInput
                placeholder={label}
                style={Styles.form_longFieldStyle}
                placeholderTextColor={Colors.placeholder}
                onChangeText={setter}
                ref={reference}
                numberOfLines={4}
                multiline={true}
            />
        </View>
    </View>
);

async function getImages(petID: string, setImages: (arg: string[]) => void) {

    // Retrieve pet images.
    fetch(`${API_PET}/images?id=${petID}`, {
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
        console.error("Failed to retrieve pet images in pet.tsx.", error);
    });
}

// https://docs.expo.dev/versions/latest/sdk/imagepicker/#usemedialibrarypermissionsoptions
export default function Tab(): ReactElement {
    let params = useLocalSearchParams<{ petID: string, petNum: string, petObject: string, timestamp: string }>();

    const carouselRef = useRef<typeof Carousel>(null);

    const nameField = useRef<TextInput>(null);
    const animalField = useRef<TextInput>(null);
    const breedField = useRef<TextInput>(null);
    const descriptionField = useRef<TextInput>(null);
    const assistanceField = useRef<typeof CheckBox>(null);
    const sizeField = useRef<typeof PickerField>(null);

    const [images, setImages] = useState<string[]>([]);
    const [petName, setPetName] = useState<string>("");
    const [petAnimal, setPetAnimal] = useState<string>("");
    const [petBreed, setPetBreed] = useState<string>("");
    const [petDescription, setPetDescription] = useState<string>("");
    const [petAssistance, setPetAssistance] = useState<boolean>(false);
    const [petSize, setPetSize] = useState<string>("Small");
    const [timestamp, setTimestamp] = useState<string>("-1");

    const [intervalStatus, setIntervalStatus] = useState(false);

    const edit = async () => {
        return await getObject("petNum") != params.petNum;
    }

    const jpetObject: ItemProps = params.petObject == null
        ? {
            name: "",
            animal: "",
            breed: "",
            description: "",
            assistance: false,
            image: "",
            petID: params.petID,
            missing: false,
            petNum: params.petNum
        }
        : JSON.parse(params.petObject);

    if (timestamp != params.timestamp) {
        setTimestamp(params.timestamp == null ? "-1" : params.timestamp);

        edit().then((editV) => {
            if (editV) {

                nameField.current?.setNativeProps({ text: jpetObject.name });
                animalField.current?.setNativeProps({ text: jpetObject.animal });
                breedField.current?.setNativeProps({ text: jpetObject.breed });
                descriptionField.current?.setNativeProps({ text: jpetObject.description });

                setPetName(jpetObject.name);
                setPetAnimal(jpetObject.animal);
                setPetBreed(jpetObject.breed);
                setPetDescription(jpetObject.description);
                setPetAssistance(jpetObject.assistance);
                setPetSize(jpetObject.size);

                return;
            }
        });

        getImages(params.petID == null ? "-1" : params.petID, setImages);

    }

    if (!intervalStatus) {
        getImages(params.petID == null ? "-1" : params.petID, setImages);
        setInterval(() => getImages(params.petID == null ? "-1" : params.petID, setImages), 3000);
        setIntervalStatus(true);
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            let uri = result.assets[0].uri;
            // Generate a request to store it in Google Cloud Storage.
            const base64 = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });

            fetch(API_IMAGE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "base64": base64,
                })
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return Promise.reject(new Error("Failed to upload image file!"));
                    }
                })
                .then((json) => {
                    return fetch(`${API_PET}/images`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: params.petID,
                            imageID: json.id,
                        }),
                    });
                })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return Promise.reject(new Error("Failed to submit photo!"));
                    }
                })
                .then((json) => {
                    return fetch(`${API_PET}/images?id=${params.petID}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });
                })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return Promise.reject(new Error("Failed to retrieve list of images!"));
                    }
                })
                .then((json) => {
                    setImages(json);
                })
                .catch((error) => console.error("Failed to upload image file in pet.tsx!", error));
        }
    };

    const storeData = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            console.error(e);
        }
    };

    const savePet = async () => {
        const petNum = params.petNum == null ? "-1" : params.petNum;
        storeData(petNum, JSON.stringify({
            name: petName,
            animal: petAnimal,
            breed: petBreed,
            description: petDescription,
            assistance: petAssistance,
            petID: params.petID,
            missing: false,
            petNum: petNum,
            size: petSize
        }))
            .then(async (json) => {
                if (petNum == await AsyncStorage.getItem("petNum")) {
                    storeData("petNum", (parseInt(petNum) + 1).toString());
                }
            })
            .then(() => {
                router.back();
            })
    }

    const done =
        <LargeMButton
            text="Save"
            onPress={savePet}
            fill={Colors.emph}
            textColor='white'
            icon={<FontAwesome name="check" size={15} color="white" />}
        />;

    
    const headerSave = <MButton text="Save" onPress={savePet} textColor={Colors.nuit} right={true} />

    const delButton =
        params.petObject == null
            ? <></>
            : <LargeMButton
                text='Delete'
                fill={Colors.error}
                textColor='white'
                onPress={() =>
                    setFound(params.petNum == null ? '-1' : params.petNum).then(() => {
                        localDelete(params.petNum == null ? '-1' : params.petNum, params.petID == null ? '-1' : params.petID);
                        router.navigate("/report");
                    })
                }
                icon={<FontAwesome name="trash" size={15} color="white" />}
            />

    const width = Dimensions.get('window').width - 40;

    const placeholder = 
        <TouchableHighlight
            onPress={pickImage}
            style={{ borderRadius: 10 }}
        >
            <View style={[{
                backgroundColor: Colors.background,
                aspectRatio: 1,
                width: '100%',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: Colors.edge,
            }]}>
                <FontAwesome name="image" size={50} color="black" />
                <Text style={Styles.text}>Please add an image.</Text>
            </View>
        </TouchableHighlight>;

    const anyImages = images.length == 0;

    const offset = useRef(new Animated.Value(0)).current;
    const insets = useSafeAreaInsets();

    return (
        <View style={Styles.container_modal_outermost}>
            <AnimatedHeader animatedValue={offset} title="Pet Information" leftHeader={BackButton} rightHeader={headerSave} rightHeaderAnimateIn={true} />
            <ScrollView
                style={[{
                    paddingTop: insets.top,
                    paddingHorizontal: 20,
                }, styles.list]}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
            >
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingTop: HEADER_HEIGHT, 
                    paddingBottom: 20
                }}>
                    <Text style={Styles.h1}>Pet Information</Text>
                    <Text style={[{ marginBottom: 10, }, Styles.text]}>Please add some information about your pet.</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={[{ marginBottom: 10, }, Styles.h2]}>Images</Text>

                    <View style={{
                        marginBottom: 10,
                    }}>
                        <MButton
                            text="Add image"
                            onPress={pickImage}
                            fill='white'
                            textColor='black'
                            border='black'
                            icon={<FontAwesome6 name="plus" size={12} color="black" />}
                        />
                    </View>
                </View>
                <View style={Styles.container}>
                    <View style={{
                        flex: 1,
                    }}>
                        <View style={{
                            alignSelf: 'center',
                            width: '100%',
                            aspectRatio: 1,
                            marginBottom: 10,
                        }}>
                            <View>
                            <Carousel
                                data={images}
                                defaultIndex={0}
                                width={width}
                                height={width}
                                renderItem={({ index }) => (
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <LoadingImage
                                            source={ images[index] }
                                            style={[{ width: width, height: width, borderRadius: 10 }, Styles.commonProp]}
                                        />
                                    </View>
                                )}
                            />
                            {anyImages && placeholder}
                            </View>
                        </View>
                        
                    </View>

                    <Text style={[{ marginTop: 10, marginBottom: 10, }, Styles.h2]}>Information</Text>

                    <View style={Styles.container}>

                        <PetField
                            setter={setPetName} label="Name" reference={nameField}
                            styleOuter={Styles.form_shortContainerStyleF} />
                        <PetField
                            setter={setPetAnimal} label="Animal" reference={animalField}
                            styleOuter={Styles.form_shortContainerStyleM} />
                        <PetField
                            setter={setPetBreed} label="Breed" reference={breedField}
                            styleOuter={Styles.form_shortContainerStyleL} />
                        <PetDescField setter={setPetDescription} label="Description" reference={descriptionField} />
                        <PickerField 
                            label="Size"
                            values={["Small", "Medium", "Large"]}
                            setter={setPetSize}
                            currentVal={petSize}
                            labelStyle={Styles.form_labelStyle}
                            valuesOuterContainerStyle={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                                flex: 4,
                                paddingRight: 15
                            }}
                            containerStyle={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                            labelContainerStyle={{
                                width: '100%',
                                flex: 1,
                                paddingLeft: 15
                            }}
                            valueContainerStyle={{
                                backgroundColor: Colors.formField,
                                padding: 10,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: Colors.edge
                            }}
                            valueSelectedContainerStyle={{
                                backgroundColor: Colors.emph,
                                padding: 10,
                                borderRadius: 10
                            }}
                            valueLabelStyle={{
                                color: 'black'
                            }}
                            valueSelectedLabelStyle={{
                                color: 'white'
                            }}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingLeft: 10
                            }}
                        >
                            <Text style={Styles.form_labelStyle}>
                                Is your pet an assistance animal?
                            </Text>
                            <CheckBox
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                    borderWidth: 0,
                                }}
                                fontFamily='Inclusive-Sans'
                                checked={petAssistance}
                                onPress={() => setPetAssistance(!petAssistance)}
                                right={true}
                                iconRight={true}
                                checkedIcon={<Ionicons name="checkbox" size={24} color={Colors.emph} />}
                                uncheckedIcon={<Ionicons name="square-outline" size={24} color={Colors.edge} />}
                            />
                        </View>
                    </View>
                </View>

                <View style={{
                    marginTop: 20
                }}>
                    {done}
                </View>
                <View style={{
                    marginTop: 10
                }}>
                    {delButton}
                </View>

                <SafeAreaView edges={['bottom']} style={{ paddingBottom: 80 }}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    list: {
        width: "100%",
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 300,
        height: 300,
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