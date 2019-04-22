import React, { Component } from 'react'
import { Text } from 'react-native'
import Button from './common/Button'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Input from './common/Input'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  render (){
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={txt => this.setState({ email: txt })}
            label={"Email"}
            placeholder={"Placeholder"} />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={txt => this.setState({ password: txt })}
            label={"Password"}
            placeholder={"Password"}
            secureTextEntry />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm