import { ReactElement, useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import LoadingImage from "./LoadingImage";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Styles } from "@/constants/Styles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {
  uri: string,
  onPress: () => void,
  text: string,
  bottomRightNode?: ReactElement,
  style: any,
}

export default function ImageCard({ uri, onPress, text, bottomRightNode, style }: Props): ReactElement {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[{
        width: '100%',
        height: 250,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'black',

      }, Styles.commonProp ]}>
        <ImageBackground 
          source={{ uri }}
          resizeMode="cover"  
          style={{ width: '100%', height: '100%' }}
          imageStyle={{ borderRadius: 10 }}
        >
          <LinearGradient 
            colors={['rgba(0,0,0,0)', '#000000']} 
            locations={[0.7, 1]}
            style={{height : '100%', width : '100%', borderRadius: 10, }}
          >
              <View 
                style={{ 
                  position: 'absolute', 
                  bottom: 5, width: '100%', 
                  flexDirection: 'row', 
                  justifyContent: 'space-between', 
                  alignItems:'center', 
                  padding: 10 
                }}
              > 
                <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Inclusive-Sans', letterSpacing: -.5 }}>{text}</Text>
                <Ionicons name="chevron-forward-outline" size={15} color="white" />
              </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      
    </TouchableOpacity>
  );
}
