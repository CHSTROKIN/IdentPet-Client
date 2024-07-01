import { View, Text, ScrollView, StyleSheet, Dimensions, Alert, Animated, StatusBar, Button } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useForm } from 'react-hook-form';
import React, { useState, useRef, useEffect } from 'react';

import * as Location from 'expo-location';
import * as FileSystem from 'expo-file-system';
import Form, { FieldSubType, FieldTypes, formOnClick } from '@/components/Form';
import { Styles } from '@/constants/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import AnimatedHeader, { HEADER_HEIGHT } from '@/components/AnimatedHeader';
import { BackButton } from './_layout';
import MButton, {LargeMButton} from '@/components/MButton';
import { Colors } from '@/constants/Colors';
import { registerForPushNotificationsAsync } from '@/constants/Notifications';
import { getObject, storeData } from './(tabs)/report';
import { Entypo } from '@expo/vector-icons';
import TextField from '@/components/TextField';
import { getDeviceUUID } from '@/constants/Uid';
const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const API_BASE = "https://petfinder-424117.nw.r.appspot.com";
const API_SUBMIT = `${API_BASE}/sighting`;
const API_IMAGE = `${API_BASE}/image`;

type FormFields = {
    behaviour: string;
    health: string;
    other: string;
}

export async function submitImage(uri: string | undefined, setError: (error: string) => void) {

    if (uri === undefined) {
        setError("No image provided!");
        return Promise.reject("No image provided!");
    }

    try {
        const fileInfo = await FileSystem.getInfoAsync(uri);
        if (!fileInfo.exists) {
            setError("Image file not found!");
            return Promise.reject("Image file not found!");
        } else {
        }
    } catch (error) {
        console.error("File ssytem error: ", error)
        setError("File system error!");
        return Promise.reject("File system error!");
    }

    const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem?.EncodingType?.Base64 });

    return (fetch(API_IMAGE, {
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
        .catch((error: Error) => {
            setError(error.message);
        }));
}

// https://medium.com/@yildizfatma/creating-and-validating-forms-in-react-native-expo-a-step-by-step-guide-c0046753eb44
export default function Tab() {
    const params = useLocalSearchParams<{ uri: string, petID: string }>();

    const { control, handleSubmit, formState: { errors } } = useForm<FormFields>();
    const [submittedData, setSubmittedData] = useState<FormFields>();

    const [location, setLocation] = useState<Location.LocationObject>();
    const [errorText, setErrorText] = useState<string>("");
    const [token, setToken] = useState<string>("");
    const [chatID, setChatID] = useState<string>("");
    const [expandedForm, setExpandedForm] = useState<boolean>(false);

    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        registerForPushNotificationsAsync()
            .then(token => setToken(token ?? ''))
            .catch((error: any) => {
                console.log("error", error)
                setToken("")
                setErrorText("Failed to register for push notifications. Please try again later.");
            });
    }, []);

    useEffect(() => {
        getDeviceUUID().then((chatID) => setChatID(chatID));
    })

    let loc: Location.LocationObject | undefined =
        location ? location : undefined;

    const offset = useRef(new Animated.Value(0)).current;
    const insets = useSafeAreaInsets();

    const callback = ( 
        form: Record<string, any>, 
        submitForm: ( url: string, method: string, moreData?: Record<string, any> ) 
            => Promise<Response> 
    ) => {

        form["contactinfo"] = phoneNumber;
        form["message"] = message;
        console.log("after change...", form);

        if (form["contactinfo"] !== "") {
            console.log("New contact info provided:", form["contactinfo"]);
            handleContactInfoChange({target: {value: form["contactinfo"]}});
        };

        submitImage(params.uri, setErrorText)
            .then((json) => {
                if (form["location_lat"] == "0" && form["location_long"] == "0") {
                    console.log("No location provided");
                    return Location.getCurrentPositionAsync({}).then((loc) => {
                        form["location_lat"] = loc.coords.latitude;
                        form["location_long"] = loc.coords.longitude;
                        return json;
                    })    
                } else {
                    return json;
                }})
            .then((json) => {
                console.log("submitting form...");
                if (form["contactinfo"] == "") {
                    console.log("No contact info given");
                    if (phoneNumber != "") {
                        console.log("Peristing old contact info:", phoneNumber);
                        form["contactinfo"] = phoneNumber;
                    }
                }
                return submitForm(API_SUBMIT, "POST", {
                    image: json.id,
                    id: params.petID,
                    pushToken: token,
                    chatID: chatID,
                });
            })
            .then((response) => {
                console.log("getting response...");
                if (!response.ok) {
                    return Promise.reject(new Error("Failed to submit sighting!"));
                }
                return response.json();
            })
            .then((json) => {
                console.log("submitted!!!!!");
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
                setErrorText("Network Error!");
            });
        Alert.alert("Sighting submitted!", "Thank you for your submission!", [
            {
                text: "OK",
                onPress: () => router.navigate({
                    pathname: '/',
                    params: {
                        'helpedID': Date.now().toString(),
                    }
                }),
            }
        ]);
    };

    const states = {} as Record<string, {value: string, setter: (arg: any) => void}>;
    const onSubmit = formOnClick( {states, callback } );

    const headerSave = <MButton text="Submit" onPress={onSubmit} textColor={Colors.nuit} right={true} />
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const fetchData = async () => {
        const storePhoneNumber = await getObject('phoneNumber');
        if (storePhoneNumber != null) {
            console.log("data is found", storePhoneNumber)
            setPhoneNumber(storePhoneNumber);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    const handleContactInfoChange = (e: any) => {
        const newContactInfo = e.target.value 
        setPhoneNumber(newContactInfo);
        storeData('phoneNumber', newContactInfo);
    };

    return (
        <View style={Styles.container_outermost}>
            <StatusBar barStyle="dark-content" />
            <AnimatedHeader 
                animatedValue={offset} 
                title="Additional Information" 
                leftHeader={BackButton} 
                rightHeader={headerSave}
            />
            <ScrollView
                style={[{
                    paddingTop: insets.top,
                    paddingHorizontal: 20,
                }]}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
            >
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingTop: HEADER_HEIGHT, 
                }}>
                    <Text style={Styles.h1}>Additional Information</Text>
                    <Text style={[{ marginBottom: 10, }, Styles.text]}>Please provide some additional information to aid in its recovery.</Text>
                </View>

                {errorText.length > 0 &&
                    <Text style={styles.errorText}>{errorText}</Text>}

                <TextField
                    value={phoneNumber}
                    setter={setPhoneNumber}
                    label="Phone No."
                    placeholder="Contact information"
                    inputStyle={Styles.form_fieldStyle}
                    containerStyle={Styles.form_shortContainerStyleS}
                    innerContainerStyle={Styles.form_fieldContainerStyle}
                    labelStyle={Styles.form_labelStyle}
                    numberOfLines={1}
                />

                <TextField
                    value={message}
                    setter={setMessage}
                    label="Message to the owner"
                    placeholder="(OPTIONAL) Any specific instructions on how to contact you?"
                    inputStyle={Styles.form_longFieldStyle}
                    containerStyle={Styles.form_longContainerStyle}
                    innerContainerStyle={Styles.form_longFieldContainerStyle}
                    labelStyle={Styles.form_longLabelStyle}
                    numberOfLines={4}
                />


                {/* <LargeMButton
                 text={(expandedForm 
                       ? "Hide Optional Information" 
                       : "Add Optional Information")}
                 onPress={() => setExpandedForm(!expandedForm)}
                 textColor={Colors.nuit}
                 icon={<Entypo
                        name={expandedForm
                              ? "chevron-thin-up"
                              : "chevron-thin-down"}
                        size={12}
                        color={Colors.nuit}
                        />}
                /> */}

                <Form
                    states={states}
                    onSubmit={onSubmit}
                    // hidden={!expandedForm}
                    fields={{
                        "where": {
                            label: "Where did you find them?",
                            fieldType: FieldTypes.SUBTITLE,
                        },
                        "location": {
                            label: "Drag the marker to where you found the pet.",
                            fieldType: FieldTypes.LOCATION,
                        },
                        "location_desc": {
                            label: "Specific Location",
                            fieldType: FieldTypes.LONG_TEXT,
                            placeholder: "Any specific location details?",
                        },
                        "description": {
                            label: "Description",
                            fieldType: FieldTypes.SUBTITLE,
                        },
                        // "animal": {
                        //     label: "Animal",
                        //     fieldType: FieldTypes.SHORT_TEXT,
                        //     placeholder: "Animal",
                        //     shortFieldSubType: FieldSubType.FIRST,
                        // },
                        // "breed": {
                        //     label: "Breed",
                        //     fieldType: FieldTypes.SHORT_TEXT,
                        //     placeholder: "Breed",
                        //     shortFieldSubType: FieldSubType.MIDDLE,
                        // },
                        "color": {
                            label: "Colour",
                            fieldType: FieldTypes.SHORT_TEXT,
                            placeholder: "Colour",
                            shortFieldSubType: FieldSubType.SINGLE,
                        },
                        "other": {
                            label: "Other things of note",
                            fieldType: FieldTypes.LONG_TEXT,
                            placeholder: "Accessories, etc.?",
                        },
                        "condition": {
                            label: "Behaviour and Condition",
                            fieldType: FieldTypes.SUBTITLE,
                        },
                        "behaviour": {
                            label: "Behaviour",
                            fieldType: FieldTypes.LONG_TEXT,
                            placeholder: "Behaviour",
                        },
                        "health": {
                            label: "Condition",
                            fieldType: FieldTypes.LONG_TEXT,
                            placeholder: "Is it injured? Limping, dirty, thin? Does it look in distress?",
                        },
                        "contactinfo": {
                            label: "Phone No.",
                            fieldType: FieldTypes.SHORT_TEXT,
                            placeholder: phoneNumber != "" ? phoneNumber : "Contact information",
                            initValue: phoneNumber,
                            shortFieldSubType: FieldSubType.SINGLE,
                            hidden: true,
                        },
                        "message": {
                            label: "Message to the owner",
                            fieldType: FieldTypes.LONG_TEXT,
                            placeholder: "Any specific instructions on how to contact you?",
                            hidden: true,
                        }
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
                <SafeAreaView edges={['bottom']} style={{ paddingBottom: 100 }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: Dimensions.get('window').width * .8,
        height: Dimensions.get('window').width * .8,
        backgroundColor: '#0553',
    },
    map: {
        width: Dimensions.get('window').width * .8,
        height: Dimensions.get('window').width * .8,
    },
    input: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    formContainer: {
        paddingBottom: 20, // Ensure there is padding so that content doesn't get hidden behind navigation buttons
    },
});
