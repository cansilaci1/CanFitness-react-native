import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 30, 
  },
  content: {
    alignItems: 'center',
    marginBottom: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  highlight: {
    color: '#FFFFFF', 
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#7A7A7A',
    marginTop: 10,
  },
});

export default styles;
