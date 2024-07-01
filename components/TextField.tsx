import type { ReactElement } from 'react';
import { StyleSheet, View, Text, TextInput, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Styles } from '../constants/Styles';
import { Colors } from '@/constants/Colors';

type Props = {
    value: string,
    setter: (arg: string) => void,
    label: string,
    placeholder?: string,
    containerStyle?: StyleProp<ViewStyle>,
    innerContainerStyle?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    inputStyle?: StyleProp<TextStyle>,
    numberOfLines: number,
    hidden?: boolean,
};

export default function TextField({
        value, setter, label, placeholder, inputStyle, labelStyle, containerStyle, innerContainerStyle, numberOfLines, hidden
    }: Props): ReactElement {
    const labelNode = (label === "") ? <></> : <Text style={labelStyle}>{label}</Text>;
    return (
        <View style={[ { display: hidden ? 'none' : 'flex' }, containerStyle]}>
            {labelNode}
            <View style={innerContainerStyle}>
                <TextInput 
                    placeholder={placeholder ?? label}
                    placeholderTextColor={Colors.placeholder}
                    onChangeText={setter}
                    value={value}
                    style={inputStyle}
                    numberOfLines={numberOfLines}
                    multiline={numberOfLines > 1}
                />
            </View>
        </View>
    );
}
