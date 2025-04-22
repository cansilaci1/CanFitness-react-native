import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

export const DarkTheme = {
  ...NavigationDarkTheme,
  dark: true,
  colors: {
    ...NavigationDarkTheme.colors,
    background: '#0E0E0E',
    text: '#FFFFFF',
    primary: '#7B6EF6',
    card: '#1E1E1E',
  },
};
