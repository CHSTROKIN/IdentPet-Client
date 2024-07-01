import { Colors } from "@/constants/Colors";
import { Styles } from "@/constants/Styles";
import { ReactElement } from "react";
import { View, Text } from "react-native";

type Props = {
  title: string,
  value: string,
};

export default function BottomTitleCard({ title, value }: Props): ReactElement {
  return (
    <View style={[{
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      minHeight: 100,
      borderColor: Colors.edge,
      borderWidth: 1,
      width: '100%'
    }, Styles.commonProp]}>
      <Text style={Styles.h2}>{value}</Text>
      <Text style={{
        fontSize: 16,
        color: 'gray',
        fontFamily: 'Inclusive-Sans'
      }}>{title}</Text>
    </View>
  );
}