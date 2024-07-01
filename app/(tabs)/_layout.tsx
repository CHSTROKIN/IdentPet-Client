import { Colors } from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useCallback, useEffect, useState } from 'react';
import { View } from "react-native";
import { StyleSheet } from 'react-native';
import { useFonts } from "@/constants/Styles";
import { SplashScreen } from "expo-router";
import { BlurView } from 'expo-blur';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
      } catch (error) {
        console.error(error);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async() => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View
        onLayout={onLayoutRootView}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: Colors.emph 
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: "Community",
              headerShown: false,
              tabBarIcon: ({ color }) =>
                <Ionicons name="people" size={33} color={color} />,
              tabBarLabelStyle: {
                fontFamily: 'Inclusive-Sans',
              },
              tabBarStyle: { position: 'absolute', backgroundColor: 'transparent', elevation: 0, bottom: 0, left: 0, right: 0 },
              tabBarBackground: () => (
                <BlurView tint="systemMaterialLight" intensity={100} style={StyleSheet.absoluteFill} experimentalBlurMethod="dimezisBlurView" />
              ),
            }}
          />
          <Tabs.Screen
            name="sighting"
            options={{
              title: "Sighting",
              headerTitle: "Report a Sighting",
              headerTitleAlign: 'center',
              tabBarActiveTintColor: 'white',
              tabBarIcon: ({ color }) =>
                <FontAwesome5 name="camera" size={28} color={color} />,
              tabBarStyle: { position: 'absolute', borderTopWidth: 0, backgroundColor: 'transparent', elevation: 0, bottom: 0, left: 0, right: 0 },
              tabBarBackground: () => (
                <View style={{
                  backgroundColor: 'transparent'
                }}></View>
              ),
              headerTransparent: true,
              headerBackground: () => (
                <BlurView tint="dark" intensity={100} style={[{ borderBottomWidth: 0.3, borderBottomColor: Colors.dark_edge }, StyleSheet.absoluteFill]} experimentalBlurMethod="dimezisBlurView" />
              ), 
              headerTitleStyle: { color: 'white', fontFamily: 'Inclusive-Sans', fontSize: 18 },
            }}

          />
          <Tabs.Screen
            name="report"
            options={{
              title: "My Pets",
              headerShown: false,
              tabBarIcon: ({ color }) =>
                <Ionicons name="paw-sharp" size={30} color={color} />,
              tabBarLabelStyle: {
                fontFamily: 'Inclusive-Sans',
              },
              tabBarStyle: { position: 'absolute', backgroundColor: 'transparent', elevation: 0, bottom: 0, left: 0, right: 0 },
              tabBarBackground: () => (
                <BlurView tint="systemMaterialLight" intensity={100} style={StyleSheet.absoluteFill} experimentalBlurMethod="dimezisBlurView" />
              ),
            }}
          />
        </Tabs>
      </View>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff', 
    fontSize: 20,
  },
});