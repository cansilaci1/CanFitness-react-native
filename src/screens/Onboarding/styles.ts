import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    width: width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
    paddingTop: height * 0.55,
  },
  image: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: height * 0.5,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingHorizontal: 30,
    lineHeight: 24,
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  prevButton: {
    position: 'absolute',
    bottom: 50,
    left: 30,
  },
  prevButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nextButtonText: {
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    left: 25,
    top: 20,
  },
});

export default styles;
  