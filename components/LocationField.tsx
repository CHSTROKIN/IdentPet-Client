import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';

import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { Styles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';

type Coord = {latitude: number, longitude: number};
type Props = {
    value: Coord,
    setter: (arg: Coord) => void,
    label: string,
    placeholder?: string,
    containerStyle?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    inputStyle?: StyleProp<TextStyle>,
    hidden?: boolean,
};

async function getRegion() {
    return;
}

export default function LocationField({
        value, setter, label, placeholder, inputStyle, labelStyle, containerStyle, hidden
    }: Props) {
    const [errorMsg, setErrorMsg] = useState('');
    const [region, setRegion] = useState<any>();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            Location.getCurrentPositionAsync({}).then((loc) => {
                console.log("Getting location");
                console.log(loc.coords.latitude, loc.coords.longitude);
                setter({latitude: loc.coords.latitude, longitude: loc.coords.longitude});
                setRegion({
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude, 
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
            }).catch(console.error);
        })();
    }, []);

    const labelNode = (label === "") ? <></> : <Text style={Styles.mapLabelStyle}>{label}</Text>;

    return (
        <View style={[{ display: hidden ? 'none' : 'flex' }, Styles.map_containerStyle]}>
            {labelNode}
            <MapView
             style={[{
                height: 300,
                width: '100%',
                borderRadius: 10,
                shadowColor: '#000',
                borderColor: Colors.edge,
             }]}
             initialRegion={{
                latitude: 51.498937,
                longitude: -0.1790668, 
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
             onRegionChange={(region) => {setRegion(region)}}>

                <Marker draggable
                 key={1}
                 coordinate={value}
                 title="Pet Went Missing Here"
                 onDragEnd={(e) => setter(e.nativeEvent.coordinate)}
                />
            
            </MapView>
        </View>
    );
}
