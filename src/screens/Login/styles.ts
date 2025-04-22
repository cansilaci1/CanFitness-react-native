import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  image: {
    width: width - 48,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#777',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 50,
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    marginRight: 8,
  },
  unitBox: {
    width: 50,
    height: 50,
    marginLeft: 12,
    backgroundColor: '#E6D9FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unitText: {
    fontWeight: 'bold',
    color: '#7B6EF6',
    fontFamily: 'Poppins-Bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  gradientButton: {
    borderRadius: 32,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
  },
});

export default styles;
