import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  Text,
  Dimensions,
  useColorScheme,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import {
  useTheme,
  useNavigation,
} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import OnboardingSlider from './Components/OnboardingSlider'; // varsa
import type { RootStackParamList } from '../../navigation'; // navigation dosyanın konumuna göre uyarlayabilirsin

interface OnboardingProps {
  toggleTheme: () => void;
}

const { width } = Dimensions.get('window');
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

const onboardingData = [
  {
    id: '1',
    title: 'Track Your Goal',
    description: "Don't worry if you have trouble determining your goals.",
    image: require('../../assets/onboarding1.png'),
  },
  {
    id: '2',
    title: 'Get Burn',
    description: "Let's keep burning, to achieve your goals.",
    image: require('../../assets/onboarding2.png'),
  },
  {
    id: '3',
    title: 'Eat Well',
    description: "Let's start a healthy lifestyle with us.",
    image: require('../../assets/onboarding3.png'),
  },
  {
    id: '4',
    title: 'Improve Sleep Quality',
    description: 'Improve the quality of your sleep with us.',
    image: require('../../assets/onboarding4.png'),
  },
];

const Onboarding: React.FC<OnboardingProps> = ({ toggleTheme }) => {
  const navigation = useNavigation<NavigationProp>();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();
  const circleCircumference = 2 * Math.PI * 30;

  const animateProgress = (index: number) => {
    Animated.timing(progressAnim, {
      toValue: index / (onboardingData.length - 1),
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleNextPress = () => {
    const isLastSlide = currentIndex === onboardingData.length - 1;

    if (isLastSlide) {
      navigation.navigate('Login'); 
    } else {
      const newIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
      setCurrentIndex(newIndex);
      animateProgress(newIndex);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <OnboardingSlider
        data={onboardingData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        animateProgress={animateProgress}
        flatListRef={flatListRef}
      />

      {/* Tema Değiştir Butonu */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 50, left: 30, zIndex: 10 }}
        onPress={toggleTheme}
      >
        <Text style={{ color: colors.text, fontSize: 16 }}>Change Theme</Text>
      </TouchableOpacity>

      {/* İleri Butonu */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <View style={{ position: 'relative' }}>
          <Svg width={70} height={70} viewBox="0 0 70 70">
            <Circle
              cx="35"
              cy="35"
              r="30"
              stroke="#E0E0E0"
              strokeWidth="4"
              fill="none"
            />
            <AnimatedCircle
              cx="35"
              cy="35"
              r="30"
              stroke={colors.primary}
              strokeWidth="4"
              fill="none"
              strokeDasharray={circleCircumference}
              strokeDashoffset={progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [circleCircumference, 0],
              })}
              strokeLinecap="round"
            />
            <Circle cx="35" cy="35" r="24" fill={colors.primary} />
          </Svg>

          <Text style={[styles.nextButtonText, { color: colors.background }]}>
            →
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;
