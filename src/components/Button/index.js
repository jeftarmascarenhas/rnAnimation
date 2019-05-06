import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fdf86a',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 18,
  },
})

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default Button
