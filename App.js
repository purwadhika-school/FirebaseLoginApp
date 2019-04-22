import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './src/components/common/Header'
import Button from './src/components/common/Button'
import LoginForm from './src/components/LoginForm'
import firebase from '@firebase/app'
import '@firebase/auth'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent = () => {
    if (this.state.loggedIn) {
      return (
        <View>
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        </View>
      )
    }

    return <LoginForm />
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
