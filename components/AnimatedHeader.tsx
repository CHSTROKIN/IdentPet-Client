import { Colors } from '@/constants/Colors';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Text, View, Animated, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export const HEADER_HEIGHT = 40;

type Props = {
  animatedValue: Animated.Value;
  title: String;
  leftHeader?: React.ReactNode;
  rightHeader?: React.ReactNode;
  leftHeaderAnimateIn?: boolean;
  rightHeaderAnimateIn?: boolean;
};

const AnimatedHeader = ( { animatedValue, title, leftHeader, rightHeader, leftHeaderAnimateIn, rightHeaderAnimateIn }: Props ) => {
  const insets = useSafeAreaInsets();

  const blurIntensity = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const borderBottomWidth = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, 0.4],
    extrapolate: 'clamp',
  });

  const textOpacity = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const leftOpacity = leftHeaderAnimateIn ? textOpacity : 1;
  const rightOpacity = rightHeaderAnimateIn ? textOpacity : 1;

  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

  return (
    <Animated.View
      style={[{
        height: 40 + insets.top,
        paddingTop: insets.top,
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: borderBottomWidth,
        position: 'absolute',
        zIndex: 1,
      }]}>
        <AnimatedBlurView
          intensity={blurIntensity}
          experimentalBlurMethod="dimezisBlurView"
          style={[{
            paddingTop: insets.top,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }, StyleSheet.absoluteFill]}
          tint="systemMaterialLight"
        >
          <Animated.View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 10,
            opacity: leftOpacity,
          }}>
            {leftHeader}
          </Animated.View>
          <Animated.Text
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'Inclusive-Sans',
              letterSpacing: -.5,
              bottom: 0,
              opacity: textOpacity,
              alignContent: 'center',
            }}>
            {title}
          </Animated.Text>
          <Animated.View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 10,
            opacity: rightOpacity,
          }}>
            {rightHeader}
          </Animated.View>
        </AnimatedBlurView>
    </Animated.View>
  );
}

export default AnimatedHeader;