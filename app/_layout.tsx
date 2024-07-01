import { Styles } from "@/constants/Styles";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MButton from "@/components/MButton";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export const BackButton = <MButton text="Back" onPress={() => router.back()} icon={<Entypo name="chevron-thin-left" size={15} color={Colors.nuit}/>} textColor={Colors.nuit} />

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <Stack
          screenOptions={{
            animation: 'none',
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerTintColor: Colors.emph,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Inclusive-Sans',
              color: Colors.nuit,
            },
          }}
        >
          <Stack.Screen name="(tabs)" options={{
            headerShown: false,
          }} />
          <Stack.Screen name="chat" options={{ 
            title: 'Chats',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'black',
              fontFamily: 'Inclusive-Sans',
              fontSize: 18,
            },
            headerLeft: () => BackButton,
          }} />

          <Stack.Screen name="pet" options={{
            title: '',
            headerShown: false,
          }} />
          <Stack.Screen name="alert" options={{
            title: '',
            headerShown: false,
          }} />
          <Stack.Screen name="submit" options={{
            title: '',
            headerShown: false,
          }} />
          <Stack.Screen name="found" options={{
            headerShown: false,
          }} />
          <Stack.Screen name="details" options={{
            title: 'More details',
            headerShadowVisible: false,
            headerShown: false,
            headerStyle: Styles.modal_header,
            headerLeft: () => BackButton,
          }}/>
          <Stack.Screen name="intermediate" options={{
            title: '',
            headerShown: false,
          }} />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}