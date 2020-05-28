import React from "react";
import Signin from "../../components/signin/signin";
import SignUp from '../../components/signup/signup'
import "./signinandsignup.scss";

const SigninandsignupPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <SignUp/>
    </div>
  );
};

export default SigninandsignupPage;
