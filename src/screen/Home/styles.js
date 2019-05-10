import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerBg: {
    backgroundColor: '#f5f5f5',
  },
  paragraph: {
    marginVertical: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '400',
    textAlign: 'center',
  },
  borderBottom: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fdf86a',
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 18,
  },
})

export default styles
