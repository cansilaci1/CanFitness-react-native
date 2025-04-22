import { DefaultTheme } from '@react-navigation/native';

export const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    text: '#1C1C1C',
    primary: '#7B6EF6',
    card: '#F5F5F5',
  },
};