import { ReactElement, useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";

type Props = {
  source: string,
  style: any,
  borderRadius?: number,
}

export default function LoadingImage({ source, style, borderRadius }: Props): ReactElement {
  const borderRad = ( borderRadius == undefined ) ? 0 : borderRadius;
  const [loading, setLoading] = useState(true);

  return (
    <View>
      <Image
        source={{ uri: source }}
        style={[{ borderRadius: borderRadius }, style]}
        onLoadEnd={() => setLoading(false)}
        resizeMode="cover"
      />
      {loading && <LoadingView borderRadius={borderRad} />}
    </View>
  );
}

type LoadingViewProps = {
  borderRadius: number,
}

function LoadingView( {borderRadius}: LoadingViewProps ): ReactElement {
  return (
    <View style={{ borderRadius: borderRadius, flex: 1, left: 0, right: 0, top: 0, bottom: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <ActivityIndicator />
    </View>
  );
}