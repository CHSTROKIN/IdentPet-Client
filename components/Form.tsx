import type { ReactElement } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, Text, Alert, ActivityIndicator, ViewPropsAndroid, StyleProp, ViewStyle, TextStyle } from 'react-native';

import TextField from './TextField';
import LocationField from './LocationField';
import { Colors } from '@/constants/Colors';
import { Styles } from '@/constants/Styles';
import MButton, { LargeMButton } from './MButton';
import { FontAwesome } from '@expo/vector-icons';
import PickerField from './PickerField';
import AugDropField from './AugDropField';
import CheckboxField from './CheckboxField';

// Setter components
type States = Record<string, {value: string, setter: (arg: any) => void}>;

export interface formOnClickInterface {
    states: States,
    indicatorSetter?: (arg: boolean) => void,
    callback: (
        form: Record<string, any>,
        submitForm: (
            url: string, method: string, moreData?: Record<string, any>
        ) => Promise<Response>
    ) => void,
};

export const formOnClick = ({ states, indicatorSetter, callback }: formOnClickInterface ) => {
    return (() => {
        const values = {} as Record<string, any>;

        for (let key in states) {
            values[key] = states[key].value;
        }
        if (indicatorSetter) indicatorSetter(true);

        console.log("submitting form...");
        
        callback(values,
            (url: string, method: string, moreData?: Record<string, any>) => {
                let data = {};
                if (moreData) data = {...values, ...moreData};
                else data = values;
                return submitForm(data, url, method);
            })
    });
};

type FieldSpecification = {
    label: string,
    fieldType: FieldTypes,
    placeholder?: string,
    initValue?: any,
    inputStyle?: StyleSheet.NamedStyles<any>,
    shortFieldSubType?: FieldSubType,
    values?: string[],
    payload?: Record<string, any>,
    hidden?: boolean,
};

type Props = {
    fields: Record<string, FieldSpecification>,
    states: States,
    onSubmit: () => void,
    hidden?: boolean,
    shortFieldStyle?: StyleProp<TextStyle>,
    shortFieldContainerStyle?: StyleProp<ViewStyle>,
    shortLabelStyle?: StyleProp<TextStyle>,
    longFieldStyle?: StyleProp<TextStyle>,
    longFieldContainerStyle?: StyleProp<ViewStyle>,
    longLabelStyle?: StyleProp<TextStyle>,
    longContainerStyle?: StyleProp<ViewStyle>,
    shortContainerStyleF?: StyleProp<ViewStyle>,
    shortContainerStyleM?: StyleProp<ViewStyle>,
    shortContainerStyleL?: StyleProp<ViewStyle>,
    shortContainerStyleS?: StyleProp<ViewStyle>,
};

enum FieldTypes {
    SUBTITLE = "subtitle",
    SHORT_TEXT = "shortText",
    LONG_TEXT = "longText",
    LOCATION = "location",
    PICKER = "picker",
    CHECKBOX = "checkbox",
    AUGDROP = "augdrop",
}

enum FieldSubType {
    FIRST = "first",
    MIDDLE = "middle",
    LAST = "last",
    SINGLE = "single",
}


function submitForm(values: Record<string, any>, url: string, method: string) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    });
}

export default function Form({
        fields, states, onSubmit, hidden,
        shortFieldStyle, shortFieldContainerStyle, shortLabelStyle,
        longFieldStyle, longFieldContainerStyle, longLabelStyle, longContainerStyle,
        shortContainerStyleF, shortContainerStyleM, shortContainerStyleL, shortContainerStyleS
    }: Props): ReactElement {
    const children: ReactElement[] = [];
    // const states = {} as Record<string, {value: string, setter: (arg: any) => void}>;

    for (let key in fields) {
        const field = fields[key];
        if (field.fieldType == "shortText") {
            const [value, setValue] = useState<string>(field.initValue);

            const shortContainerStyleP = 
                field.shortFieldSubType == FieldSubType.FIRST ? shortContainerStyleF :
                field.shortFieldSubType == FieldSubType.MIDDLE ? shortContainerStyleM :
                field.shortFieldSubType == FieldSubType.LAST ? shortContainerStyleL :
                field.shortFieldSubType == FieldSubType.SINGLE ? shortContainerStyleS :
                shortContainerStyleF;

            children.push(
                <TextField
                    value={value}
                    setter={setValue}
                    label={field.label}
                    placeholder={field.placeholder}
                    inputStyle={field.inputStyle || shortFieldStyle}
                    containerStyle={shortContainerStyleP}
                    innerContainerStyle={shortFieldContainerStyle}
                    labelStyle={shortLabelStyle}
                    key={key}
                    numberOfLines={1}
                    hidden={field.hidden}
                />
            )
            states[key] = {
                value: value,
                setter: setValue,
            };
        } else if (field.fieldType == "longText") {
            const [value, setValue] = useState<string>(field.initValue);
            children.push(
                <TextField
                 value={value}
                 setter={setValue}
                 label={field.label}
                 placeholder={field.placeholder}
                 inputStyle={field.inputStyle || longFieldStyle}
                 containerStyle={longContainerStyle}
                 innerContainerStyle={longFieldContainerStyle}
                 labelStyle={longLabelStyle}
                 key={key}
                 numberOfLines={4}
                 hidden={field.hidden}
                />
            )
            states[key] = {
                value: value,
                setter: setValue,
            };
        } else if (field.fieldType == "location") {
            const [value, setValue] = useState<{latitude: number, longitude: number}>({
                latitude: 51.498937,
                longitude: -0.1790668
            });
            children.push(
                <LocationField
                    value={value}
                    setter={setValue}
                    label={field.label}
                    placeholder={field.placeholder}
                    inputStyle={longFieldStyle}
                    containerStyle={longContainerStyle}
                    labelStyle={longLabelStyle}
                    key={key}
                    hidden={field.hidden}
                />
            )
            states[`${key}_lat`] = {
                value: value.latitude.toString(),
                setter: setValue,
            };
            states[`${key}_long`] = {
                value: value.longitude.toString(),
                setter: setValue,
            };
        } else if (field.fieldType == "subtitle") {
            children.push(
                <Text style={Styles.form_subtitleStyle} key={key}>{field.label}</Text>
            );
        } else if (field.fieldType == "picker") {
            const [value, setValue] = useState<string>(field.initValue);

            children.push(
                <PickerField 
                    label={field.label}
                    values={field.values || []}
                    currentVal={value}
                    setter={setValue}
                    labelStyle={Styles.form_labelStyle}
                    hidden={field.hidden}
                    valuesOuterContainerStyle={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        flex: 4,
                        paddingRight: 15,
                        marginBottom: 10,
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
                    key={key}
                />
            )
            
            states[key] = {
                value: value,
                setter: setValue,
            };
        } else if (field.fieldType == "checkbox") {
            const [value, setValue] = useState<boolean>(field.initValue);

            children.push(
                <CheckboxField
                    value={value}
                    setter={setValue}
                    label={field.label}
                    containerStyle={longFieldContainerStyle}
                    labelStyle={longLabelStyle}
                    key={key}
                />
            );

            states[key] = {
                value: value ? "true" : "false",
                setter: setValue,
            };
        } else if (field.fieldType == FieldTypes.AUGDROP) {
            const [value, setValue] = useState<string>(field.initValue);
            children.push(
                <AugDropField
                    value={value}
                    setter={setValue}
                    label={field.label}
                    placeholder={field.placeholder}
                    choices={field.payload?.choices || []}
                    otherValue={field.payload?.otherValue || "Other"}
                    fullPickerStyle={longFieldStyle}
                    halfPickerStyle={shortFieldStyle}
                    halfTextStyle={shortFieldStyle}
                    halfTextContainerStyle={shortFieldContainerStyle}
                    containerStyle={longFieldContainerStyle}
                    labelStyle={longLabelStyle}
                    key={key}
                />
            );
            states[key] = {
                value: value,
                setter: setValue,
            };
        } else {
            throw new Error(`Unsupported field type: ${field.fieldType}`);
        }
    }

    return (
        <View style={[ { display: hidden ? 'none' : 'flex' }, Styles.container]}>
            <View>
                {children}
            </View>
            <View style={{
                paddingTop: 20
            }}>
                <LargeMButton text="Submit" 
                    onPress={onSubmit} 
                    fill={Colors.emph}
                    textColor='white'
                    icon={<FontAwesome name="check" size={10} color="white" />}
                />
            </View>
        </View>
    );
}

export { FieldTypes, FieldSubType };