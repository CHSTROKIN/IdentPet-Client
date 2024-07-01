import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, View } from 'react-native';

interface CustomButtonProps {
  text: string;
  icon?: React.ReactNode;
  fill?: string;
  border?: string;
  textColor?: string;
  onPress: () => void;
  padding?: number;
  right?: Boolean;
  larger?: Boolean;
}

const MButton: React.FC<CustomButtonProps> = ({ text, icon, fill, border, textColor, onPress, padding, right, larger }) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: fill || 'transparent',
    borderColor: border || 'transparent',
    borderWidth: border ? 1 : 0,
    borderRadius: (fill || border) ? 10 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: padding ? padding : 6,
    paddingHorizontal: fill ? 8 : 0,
    alignSelf: 'center',
  };


  const styles = StyleSheet.create({
    text: {
      fontSize: (text == 'Save' || text == 'Back' || text == 'Submit' || larger) ? 16 : 12,
      color: textColor || '#000',
      fontFamily: 'Inclusive-Sans',
    },
    icon: {
      paddingRight: 2
    },
  });

  const showIcon = icon ? <View style={styles.icon}>{icon}</View> : null;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      {right ? null : showIcon}
      <Text style={styles.text}>{text}</Text>
      {right ? showIcon : null}
    </TouchableOpacity>
  );
};

export const LargeMButton: React.FC<CustomButtonProps> = ({ text, icon, fill, border, textColor, onPress, padding }) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: fill || 'transparent',
    borderColor: border || 'transparent',
    borderWidth: border ? 1 : 0,
    borderRadius: (fill || border) ? 5 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: padding ? padding : 8,
    paddingHorizontal: fill ? 12 : 0,
    width: '100%',
  };


  const styles = StyleSheet.create({
    text: {
      fontSize: text == 'Back' ? 18 : 18,
      color: textColor || '#000',
      fontFamily: 'Inclusive-Sans',
      letterSpacing: -.5,
    },
    icon: {
      paddingRight: 5
    },
  });

  const showIcon = icon ? <View style={styles.icon}>{icon}</View> : null;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      {showIcon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MButton;
