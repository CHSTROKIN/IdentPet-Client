import { View, Text } from 'react-native';
import { Styles } from '@/constants/Styles';

type Props = {
    label: string,
    value: string,
};

export default function LabeledInfo({ label, value }: Props) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
        }}>
            <Text style={Styles.bold_text}>{label}</Text>
            <Text style={Styles.text}>{value}</Text>
        </View>
    );
}
