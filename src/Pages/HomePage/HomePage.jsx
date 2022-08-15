import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'

export default class HomePage extends Component {
  state ={
    showLogin: true
  }
  render() {
    return (
      <div>
        <h3 onClick={()=>this.setState({showLogin: this.state.showLogin})}>
          {this.state.showLogin ? 'SIGN UP' : 'LOG IN'}
        </h3>
        {this.state.showLogin ?
        <LoginForm setUserInState = {this.props.setUserInState} /> :
        <SignUpForm setUserInState={this.props.setUserInState} />}

      </div>
    )
  }
}

