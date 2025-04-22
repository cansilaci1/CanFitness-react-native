import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation'; // path'e göre ayarlayabilirsin

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  const navigation = useNavigation<NavigationProp>();

  const [gender, setGender] = useState('');
  const [genderModalVisible, setGenderModalVisible] = useState(false);

  const handleSelectGender = (selectedGender: string) => {
    setGender(selectedGender);
    setGenderModalVisible(false);
  };

  const handleNext = () => {
    navigation.navigate('GoalSlider');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Let’s complete your profile</Text>
      <Text style={styles.subtitle}>
        It will help us to know more about you!
      </Text>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => setGenderModalVisible(true)}
          style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}
        >
          <Icon name="user" size={20} color="#aaa" style={styles.icon} />
          <Text style={[styles.input, { color: gender ? '#000' : '#aaa' }]}>
            {gender || 'Choose Gender'}
          </Text>
          <Icon name="chevron-down" size={20} color="#aaa" />
        </TouchableOpacity>

        <View style={[styles.inputContainer, { flex: 1, marginLeft: 8 }]}>
          <Icon name="calendar" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            placeholder="Date of Birth"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Icon name="package" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            placeholder="Your Weight"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>
        <View style={styles.unitBox}>
          <Text style={styles.unitText}>KG</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Icon name="arrow-down-up" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            placeholder="Your Height"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>
        <View style={styles.unitBox}>
          <Text style={styles.unitText}>CM</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleNext}>
        <LinearGradient
          colors={['#A084E8', '#8E8FFA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Modal
        transparent
        visible={genderModalVisible}
        animationType="fade"
        onRequestClose={() => setGenderModalVisible(false)}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
          onPressOut={() => setGenderModalVisible(false)}
        >
          <View
            style={{
              backgroundColor: 'white',
              marginHorizontal: 40,
              borderRadius: 12,
              padding: 20,
            }}
          >
            <Pressable onPress={() => handleSelectGender('Male')}>
              <Text style={{ paddingVertical: 10, fontSize: 16 }}>Male</Text>
            </Pressable>
            <Pressable onPress={() => handleSelectGender('Female')}>
              <Text style={{ paddingVertical: 10, fontSize: 16 }}>Female</Text>
            </Pressable>
            <Pressable onPress={() => handleSelectGender('Other')}>
              <Text style={{ paddingVertical: 10, fontSize: 16 }}>Other</Text>
            </Pressable>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Login;
