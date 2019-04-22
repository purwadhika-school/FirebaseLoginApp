import React, { Component } from 'react'
import firebase from '@firebase/app'
import "@firebase/auth"
import { ActivityIndicator, Text } from 'react-native'
import Button from './common/Button'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Input from './common/Input'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      loadingState: false,
    }
  }

  onButtonLoginPress = () => {
    const { email, password } = this.state

    this.setState({ errorMessage: '' })

    if (email && password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
          console.log(response)
          this.onLoginSuccess()
        })
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
              console.log(res)
              this.onLoginSuccess()
            })
            .catch((error) => {
              console.log(error)
              this.onLoginFailed()
            })
        })
    }
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      loading: false,
      password: '',
      errorMessage: '' 
    })
  }

  onLoginFailed = () => {
    this.setState({
      loading: false,
      errorMessage: 'Authentication Failed!'
    })
  }

  renderButton = () => {
    if (this.state.loadingState) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      )
    }

    return <Button onPress={this.onButtonLoginPress}>Login</Button>
  }

  render (){
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={txt => this.setState({ email: txt })}
            label={"Email"}
            placeholder={"Email"} />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={txt => this.setState({ password: txt })}
            label={"Password"}
            placeholder={"Password"}
            secureTextEntry />
        </CardSection>

        <Text style={{ fontSize: 20, alignSelf: 'center', color: 'red' }}>{this.state.errorMessage}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm