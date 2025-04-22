import * as React from 'react';
import Navigation from './navigation'; // Default import olmalı
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Text, View } from 'react-native';
import { LightTheme, DarkTheme } from './theme';
import { useColorScheme } from 'react-native';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  const [appReady, setAppReady] = useState(false);
  const scheme = useColorScheme(); 

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Bold': Poppins_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        setAppReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!appReady) {
    return null; 
  }
  return (
    <Navigation
      theme={themeMode === 'dark' ? DarkTheme : LightTheme}
      onReady={() => SplashScreen.hideAsync()}
      toggleTheme={toggleTheme} 
    />
  );
  
}
