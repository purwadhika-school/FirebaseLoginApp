import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const Button = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
})

export default Button