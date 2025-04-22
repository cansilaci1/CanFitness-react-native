import React from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from '../styles'; // styles.ts dosyan doğru konumdaysa

const { width } = Dimensions.get('window');

interface SlideItem {
  id: string;
  title: string;
  description: string;
  image: any;
}

interface OnboardingSliderProps {
  data: SlideItem[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  animateProgress: (index: number) => void;
  flatListRef: React.RefObject<FlatList>;
}

const OnboardingSlider: React.FC<OnboardingSliderProps> = ({
  data,
  currentIndex,
  setCurrentIndex,
  animateProgress,
  flatListRef,
}) => {
  const { colors } = useTheme();

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      animateProgress(newIndex);
    }
  };

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={handleScrollEnd}
      renderItem={({ item }) => (
        <View style={[styles.page, { backgroundColor: colors.background }]}>
          <Image source={item.image} style={styles.image} />
          <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
          <Text style={[styles.description, { color: colors.text }]}>{item.description}</Text>
        </View>
      )}
    />
  );
};

export default OnboardingSlider;
