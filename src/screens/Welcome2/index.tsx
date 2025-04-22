import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomButton from '../../components/CustomButton';
import { RootStackParamList } from '../../navigation';
import styles from './styles';

const Welcome2: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { colors } = useTheme();

  const handleGetStarted = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <LinearGradient colors={['#92A3FD', '#9DCEFF']} style={[styles.container]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>
          Can <Text style={styles.highlight}>Fit</Text>
        </Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Everybody Can Train
        </Text>
      </View>

      <CustomButton
        title="Get Started"
        onPress={handleGetStarted}
        backgroundColor="#FFFFFF"
        textColor="#A88CF6"
      />
    </LinearGradient>
  );
};

export default Welcome2;
