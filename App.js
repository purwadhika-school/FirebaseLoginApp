import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './src/components/common/Header'

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
      </View>
    );
  }
}
