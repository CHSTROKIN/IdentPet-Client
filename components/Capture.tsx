import { ReactElement } from "react";
import { TouchableHighlight, View } from "react-native";

type Props = {
  onPress: () => void
}

export default function CaptureButton({ onPress }: Props): ReactElement {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={{
        width: 65,
        height: 65,
        borderRadius: 32.5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{
        backgroundColor: 'white',
        width: 65,
        height: 65,
        borderRadius: 32.5,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{
          backgroundColor: 'black',
          width: 60,
          height: 60,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <View style={{
            backgroundColor: 'white',
            width: 55,
            height: 55,
            borderRadius: 27.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}