import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  gradientColors?: [string, string]; 
  style?: ViewStyle;
  textStyle?: TextStyle; 
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = '#6A5ACD',
  textColor = '#FFFFFF',
  gradientColors,
  style,
  textStyle,
  ...props 
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.touchable, style]} {...props}>
      {gradientColors ? (
        <LinearGradient colors={gradientColors} style={[styles.button, style]}>
          <Text style={[styles.buttonText, { color: textColor }, textStyle]}>{title}</Text>
        </LinearGradient>
      ) : (
        <View style={[styles.button, { backgroundColor }, style]}>
          <Text style={[styles.buttonText, { color: textColor }, textStyle]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50, 
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomButton;
