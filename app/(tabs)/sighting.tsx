import { StyleSheet, Text, Dimensions, View, Pressable, StatusBar, Platform, ImageBackground } from 'react-native';
import { useState, useRef } from 'react';
import { CameraType, CameraView, FlashMode, useCameraPermissions } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import CaptureButton from '@/components/Capture';
import { BlurView } from 'expo-blur';
import { Colors } from '@/constants/Colors';
import { LargeMButton } from '@/components/MButton';
import { Alert } from 'react-native';



export default function Tab() {
  const [camFacing, setFacing] = useState<CameraType>("back");
  const [useFlash, setFlash] = useState<FlashMode>("auto");
  const [rotateColor, setRotateColor] = useState<string>("white");

  const params = useLocalSearchParams<{ petID: string }>();
  const [permission, requestPermission] = useCameraPermissions();
  const isFocused = useIsFocused()
  const cameraRef = useRef<CameraView>(null);

  const [showSplash, setShowSplash] = useState<boolean>(false);

  const petID = params.petID;

  var cameraReady = false;

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <LargeMButton onPress={requestPermission} text="Grant permission" textColor={Colors.tabIconDefault}/>
        <Text style={{ textAlign: 'center', color: Colors.edge }}>We need your permission to show the camera.</Text>
      </View>
    );
  }

  async function takePhoto() {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      if (photo) {
        router.navigate({
          pathname: '../intermediate',
          params: {
            photo_uri: photo.uri,
            petID: petID,
          }
        });
      }
    }
  }

  const facingClick = () => {
    if (camFacing === "back") {
      setFacing("front");
    } else {
      setFacing("back");
    }
  }

  const flashClick = () => {
    if (useFlash === "auto") {
      setFlash("on");
    } else if (useFlash === "on") {
      setFlash("off");
    } else {
      setFlash("auto");
    }
  }

  const flashIcon = () => {
    if (useFlash === "auto") {
      return <Ionicons name="flash" size={24} color="white" />;
    } else if (useFlash === "on") {
      return <Ionicons name="flash" size={24} color="#FFD407" />;
    } else {
      return <Ionicons name="flash-off" size={24} color="white" />;
    }
  }

  const tabBarHeight = ( Platform.OS === 'ios' ? 80 : 50); 
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
      {isFocused && <View style={styles.container}>
        <CameraView
          style={styles.camera}
          facing={camFacing}
          onCameraReady={() => cameraReady = true}
          flash={useFlash}
          ref={cameraRef}>
          {<>
          <View style={{
            position: 'absolute',
            bottom: tabBarHeight,
            top: height - (tabBarHeight * 2.4),
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
              <BlurView tint="dark" intensity={100} style={[{ borderBottomWidth: 0.4, borderBottomColor: Colors.dark_edge }, StyleSheet.absoluteFill]} experimentalBlurMethod="dimezisBlurView">
                <View style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginLeft: width / 8,
                  marginRight: width / 8,
                }}>

                  <Pressable 
                    onPress={flashClick}
                  >
                    {flashIcon()}
                  </Pressable>
                  <CaptureButton onPress={() => takePhoto()} />
                  <Pressable 
                    onPress={facingClick}
                    onPressIn={() => setRotateColor('rgba(255, 255, 255, 0.2)')}
                    onPressOut={() => setRotateColor('rgba(255, 255, 255, 1.0)')}
                  >
                    <MaterialIcons name="cameraswitch" size={24} color={rotateColor} />
                  </Pressable>
                </View>
                  
              </BlurView>
            </View>
          </>
          }
        </CameraView>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'left'
  },
  gradient: {
    alignSelf: 'auto',
    width: "100%",
    borderRadius: 5,
    alignItems: 'center',
  },
});
