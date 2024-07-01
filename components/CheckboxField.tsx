import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { ReactElement } from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { CheckBox } from 'react-native-elements';

type Props = {
    value: boolean,
    setter: (arg: boolean) => void,
    label: string,
    containerStyle?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    hidden?: boolean,
};

export default function CheckboxField({
        value, setter, label, containerStyle, labelStyle, hidden
    }: Props): ReactElement {
    return (
        <View
            style={[{ display: hidden ? 'none' : 'flex' }, containerStyle]}
        >
            <Text style={labelStyle}>
                {label}
            </Text>
            <CheckBox
                containerStyle={{
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                }}
                fontFamily='Inclusive-Sans'
                checked={value}
                onPress={() => setter(!value)}
                right={true}
                iconRight={true}
                checkedIcon={<Ionicons name="checkbox" size={24} color={Colors.emph} />}
                uncheckedIcon={<Ionicons name="square-outline" size={24} color={Colors.edge} />}
            />
        </View>
    );
}