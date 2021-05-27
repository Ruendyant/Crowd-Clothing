import React from 'react';
import { auth, signInWithGoogle } from '../../Component/firebase/firebase_utils';
import FormInput from '../../Component/FormInput/forminput_component';
import SubmitButton from '../../Component/FormInput/submit_component';

import "./signinregister.scss";

export default class SignInRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email:'',
        password:''
      })
    }catch(error) {
      console.log(error);
    }

    this.setState({email:'', password:''})
  }

  handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;

    this.setState({[name]:value});
  }

  render() { 
  return (
    <div className="signin">
      <h2>Already have account</h2>
      <span>Please enter your email and password correctly</span>

      <form onSubmit={this.handleSubmit}>
        
      <FormInput 
      name="email" 
      label="email" 
      type="email"
      handlechange={this.handleChange}
      value={this.state.email}
      required
      />

      <FormInput 
      name="password" 
      label="password" 
      type="password"
      handlechange={this.handleChange}
      value={this.state.password}
      required
      />
      <div className="buttons">
        <SubmitButton type="submit" value="submit">Sign In</SubmitButton>
        <SubmitButton isGoogleIsGood onClick={signInWithGoogle}>{' '}Sign In With Google{' '}</SubmitButton>
      </div>
      </form>
    </div>
  )
  }
}