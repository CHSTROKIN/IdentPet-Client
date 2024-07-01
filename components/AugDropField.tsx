import React, { useState, useEffect, ReactElement } from 'react';
import { Text, View, StyleSheet, TextInput, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type Props = {
    value: string,
    setter: (arg: string) => void,
    placeholder?: string,
    label: string,
    containerStyle?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    choices: string[],
    otherValue?: string,
    fullPickerStyle?: StyleProp<ViewStyle>,
    halfPickerStyle?: StyleProp<ViewStyle>,
    halfTextStyle?: StyleProp<TextStyle>,
    halfTextContainerStyle?: StyleProp<ViewStyle>,
};

export default function AugDropField({
    value, setter, placeholder, label, containerStyle, labelStyle, choices, otherValue,
    fullPickerStyle, halfPickerStyle, halfTextStyle, halfTextContainerStyle
}: Props): ReactElement {
    const [expandedInput, setExpandedInput] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(value);
    const [textInputValue, setTextInputValue] = useState("");
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <Picker
             selectedValue={dropdownValue}
             onValueChange={(itemValue) => {
                setDropdownValue(itemValue);
                if (itemValue == otherValue) {
                    setter(textInputValue);
                    setExpandedInput(true);
                } else {
                    setter(itemValue);
                    setExpandedInput(false);
                }
             }}
             style={(expandedInput ? halfPickerStyle : fullPickerStyle)}>

                {choices.map((choice, index) => (
                    <Picker.Item key={index} label={choice} value={choice} />
                ))}
                <Picker.Item label={otherValue} value={otherValue} key={-1}/>

            </Picker>
            {expandedInput && (
                <View style={halfTextContainerStyle}>
                    <TextInput
                     defaultValue={textInputValue}
                     onChangeText={(text) => {
                        setter(text);
                        setTextInputValue(text);
                     }}
                     placeholder={placeholder}
                     style={halfTextStyle}
                     numberOfLines={1}
                    />
                </View>
            )}
        </View>
    )
}
