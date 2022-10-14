import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export type StyledButtonProps = {
  size: 1 | 2 | 3 | 4;
  style: 'light' | 'dark' | 'highlight' | 'clear' | 'blank-space';
  text?: string;
  icon?: string;
  action?: () => void;
};

export const StyledButton = ({
  size,
  style,
  text,
  icon,
  action,
}: StyledButtonProps) => {
  let fontSize: number = 0;
  let width: number = 0;
  let height: number = 0;
  let color: 'white' | 'black';
  let backgroundColor: string;
  switch (size) {
    case 1:
      fontSize = 12;
      width = 58;
      height = 30;
      break;
    case 2:
    default:
      fontSize = 16;
      width = 90;
      height = 50;
      break;
    case 3:
      fontSize = 18;
      width = 110;
      height = 50;
      break;
    case 4:
      fontSize = 18;
      width = 160;
      height = 80;
      break;
  }
  switch (style) {
    case 'light':
    default:
      backgroundColor = '#FBF9F9';
      color = 'black';
      break;
    case 'dark':
      backgroundColor = '#E4E0DF';
      color = 'black';
      break;
    case 'highlight':
      backgroundColor = '#0063B1';
      color = 'white';
      break;
    case 'clear':
      backgroundColor = 'transparent';
      color = 'black';
      break;
  }
  const styles = StyleSheet.create({
    button: {
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor,
      width,
      height,
      margin: 2,
      elevation: 1,
    },
    blank_space: {
      width,
      height,
      margin: 2,
      backgroundColor: 'transparent',
    },
    text: {
      fontSize,
      color,
    },
  });

  return (
    <>
      {style !== 'blank-space' && (
        <TouchableOpacity style={styles.button} onPress={() => action()}>
          {text && <Text style={styles.text}>{text}</Text>}
          {icon && <Icon name={icon} size={fontSize} color={color} />}
        </TouchableOpacity>
      )}
      {style === 'blank-space' && <View style={styles.blank_space} />}
    </>
  );
};
