import { StyleSheet } from 'react-native'

const styles = ({ WIDTH }) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  ball: {
    width: WIDTH / 6,
    height: WIDTH / 6,
    borderRadius: WIDTH / 6,
    backgroundColor: '#fdf86a',
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOpacity: 0.2,
  },
})

export default styles
