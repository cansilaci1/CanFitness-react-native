import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome2 from '../screens/Welcome2';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';
import GoalSlider from '../screens/GoalSlider';

export type RootStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
  Login: undefined;
  GoalSlider: undefined;
};

interface NavigationProps {
  theme: Theme;
  onReady: () => void;
  toggleTheme: () => void;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC<NavigationProps> = ({ theme, onReady, toggleTheme }) => {
  return (
    <NavigationContainer theme={theme} onReady={onReady}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome2} />
        <Stack.Screen
          name="Onboarding"
          children={() => <Onboarding toggleTheme={toggleTheme} />}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="GoalSlider" component={GoalSlider} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
