import React from 'react';
import SignUp from '../../Component/sign_up/sign-up_comp';
import SignInRegister from "../SignIn/signinregister";
import "./sing-in_and_sign-up_styles.scss";

const SignInSignUp = () => {
  return( 
    <div className="sign-in-sign-up">
      <SignInRegister />
      <SignUp />
    </div>
  )
}

export default SignInSignUp;