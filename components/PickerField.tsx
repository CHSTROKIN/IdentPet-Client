import { useState, type ReactElement } from 'react';
import { StyleSheet, View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Colors } from '@/constants/Colors';

type Props = {
  label: string;
  values: string[];
  setter: (arg: string) => void,
  currentVal: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle: StyleProp<TextStyle>;
  labelContainerStyle?: StyleProp<ViewStyle>
  valueLabelStyle?: StyleProp<TextStyle>;
  valueSelectedLabelStyle?: StyleProp<TextStyle>;
  valueContainerStyle?: StyleProp<ViewStyle>;
  valueSelectedContainerStyle?: StyleProp<ViewStyle>;
  valuesOuterContainerStyle?: StyleProp<ViewStyle>;
  hidden?: boolean;
}

export default function PickerField({
  label, values, currentVal, setter, containerStyle, labelStyle, labelContainerStyle, valueLabelStyle, valueSelectedLabelStyle,
  valueContainerStyle, valueSelectedContainerStyle, valuesOuterContainerStyle, hidden,
}: Props): ReactElement {
  return (
    <View style={[ { display: hidden ? 'none' : 'flex' }, containerStyle]}>
      <View style={labelContainerStyle}>
        <Text style={labelStyle}>{label}</Text>
      </View>
      <View style={valuesOuterContainerStyle}>
        {values.map((value, index) => {
          return (
            <TouchableHighlight 
              style={(currentVal === value ? valueSelectedContainerStyle : valueContainerStyle )}
              onPress={() => {
                setter(value);
              }}
              underlayColor={Colors.emphO}
              key={index}
            >
              <Text
                key={index}
                style={(currentVal === value ? valueSelectedLabelStyle : valueLabelStyle)}
              >
                {value}
              </Text>
            </TouchableHighlight>
          )
        })}
      </View>
    </View>
  )
}