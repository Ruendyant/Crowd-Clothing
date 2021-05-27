import React from 'react';
import { auth, createdUserWithGoogle } from '../firebase/firebase_utils';
import FormInput from '../FormInput/forminput_component';
import SubmitButton from '../FormInput/submit_component';

import './sign-up_styles.scss';

export default class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName : '',
      email : '',
      password : '',
      confirmPassword : '',
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({ [name] : value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword) {
      alert('Wrong Password');
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      await createdUserWithGoogle(user, {displayName});

      this.setState({
        displayName : '',
        email : '',
        password : '',
        confirmPassword : ''
      })
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return(
      <div className="sign-up">
        <h2 className="title">Don't have an account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            type="text"
            name="displayName"
            handlechange={this.handleChange}
            value={displayName}
            label="Display Name"
            required
          />
          <FormInput 
            type="email"
            name="email"
            handlechange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput 
            type="password"
            name="password"
            handlechange={this.handleChange}
            value={password}
            label="Password"
            required
          />
          <FormInput 
            type="password"
            name="confirmPassword"
            handlechange={this.handleChange}
            value={confirmPassword}
            label="Confirm Password"
            required
          />
          <SubmitButton type="submit">SIGN UP</SubmitButton>
        </form>
      </div>
    )
  }
}