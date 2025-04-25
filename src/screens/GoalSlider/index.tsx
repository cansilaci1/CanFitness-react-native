import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.72;
const SIDE_PADDING = (width - CARD_WIDTH) / 2;

const data = [
  { id: '1', image: require('../../assets/goal1.png') },
  { id: '2', image: require('../../assets/goal2.png') },
  { id: '3', image: require('../../assets/goal3.png') },
];

const GoalSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / CARD_WIDTH);
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your goal ?</Text>
      <Text style={styles.subtitle}>
        It will help us to choose a best program for you
      </Text>

      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={handleScroll}
        contentContainerStyle={{ paddingHorizontal: SIDE_PADDING }}
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={[styles.card, { width: CARD_WIDTH }]}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
          </View>
        )}
      />

      <TouchableOpacity style={styles.buttonContainer}>
        <LinearGradient
          colors={['#A084E8', '#8E8FFA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

};

export default GoalSlider;