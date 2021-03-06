import React from 'react'
import { View, StyleSheet } from 'react-native'

const CardSection = (props) => (
  <View style={styles.container}>{props.children}</View>
)

const styles = StyleSheet.create({
  container: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  }
})

export default CardSection