import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const Input = ({ label, placeholder, secureTextEntry }) => (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        secureTextEntry={secureTextEntry}
        placeholder={placeholder} 
        autoCorrect={false} 
        style={styles.input} />
    </View>
  )

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }, input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 35,
    width: 100,
    flex: 2,
  }, container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})


export default Input