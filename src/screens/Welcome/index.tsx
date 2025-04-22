import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const Welcome: React.FC = () => {
  const handleGetStarted = () => {
    console.log('Get Started Pressed');
    // navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Can <Text style={styles.highlight}>Fit</Text>
      </Text>
      <Text style={styles.subtitle}>Everybody Can Train</Text>

      <CustomButton 
        title="Get Started" 
        onPress={handleGetStarted} 
        gradientColors={['#7B6EF6', '#A88CF6']}  // gradient goruntu
        textColor="#FFFFFF"
      />
    </View>
  );
};

export default Welcome;
