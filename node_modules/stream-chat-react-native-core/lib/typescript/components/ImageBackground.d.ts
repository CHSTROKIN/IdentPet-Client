import * as React from 'react';
import { ImageBackgroundProps, ImageProps } from 'react-native';
/**
 * DISCLAIMER: This component has been pretty-much copied from react-native's source code
 * https://github.com/facebook/react-native/blob/main/Libraries/Image/ImageBackground.js
 * Few modifications have been done such as converting to functional component, removing ref related logic (since its not required).
 * Also support for prop `ImageComponent` has been introduced to allow rendering custom
 * component instead of `Image`.
 *
 *
 * Very simple drop-in replacement for <Image> which supports nesting views.
 *
 * ```ReactNativeWebPlayer
 * import React, { Component } from 'react';
 * import { AppRegistry, View, ImageBackground, Text } from 'react-native';
 *
 * class DisplayAnImageBackground extends Component {
 *   render() {
 *     return (
 *       <ImageBackground
 *         style={{width: 50, height: 50}}
 *         source={{uri: 'https://reactnative.dev/img/opengraph.png'}}
 *       >
 *         <Text>React</Text>
 *       </ImageBackground>
 *     );
 *   }
 * }
 *
 */
export declare const ImageBackground: React.ComponentType<ImageBackgroundProps & {
    ImageComponent?: React.ComponentType<ImageProps>;
}>;
//# sourceMappingURL=ImageBackground.d.ts.map