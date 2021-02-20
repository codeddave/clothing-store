import React, { Component, useState } from "react";
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";

function SignIn (){
const [email, setEmail]= useState('')
const [password, setPassword]= useState('')


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('')
      setPassword('')
    } catch (error) {
      console.error(error);
    }
  };

/*  const handleChange = (e) => {

 if(e.target.value === 'email') {
   setEmail(e.target.value)
 } else {
   setPassword(e.target.value)
 }
    console.log(email)
    console.log(password)
  }; */
  const handleEmail = (e) => {

      setEmail(e.target.value)
  }
  const handlePassword = (e) => {

    setPassword(e.target.value)
}
 
    return (
      <div className="sign-in">
        <span className="already">I already have an account</span>
        <span> Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email"
            handleChange={handleEmail}
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            label="Password"
            handleChange={handlePassword}
          />
          <div className="sign">
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
    }
export default SignIn;
