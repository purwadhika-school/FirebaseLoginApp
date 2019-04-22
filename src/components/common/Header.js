import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ headerText }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{headerText}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  }, text: {
    fontSize: 25
  }
})

export default Header