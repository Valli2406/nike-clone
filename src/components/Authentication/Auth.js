import React, { useState } from 'react';
import './Auth.css';
import { SiNike, SiJordan } from "react-icons/si";
import { useDispatch } from 'react-redux';
import { login } from '../../store/auth-slice';



function Auth() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <>
      <form className='whole' onSubmit={handleSubmit}>
        <div className='box'>
          <div className='logos'>
            <SiNike />
            <SiJordan />
          </div>
          <h1>Enter your email to join us or sign in.</h1>
          <p>India</p>
          <input
            required
            placeholder='Email*'
            className='input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            placeholder='Password*'
            className='input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className='tc'>By continuing, I agree to Nike's <a href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=IN&language=en&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df' target='_blank'>Privacy Policy</a> and <a href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=IN&language=en&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df' target='_blank'>Terms of Use</a></p>
          <button>Continue</button>
        </div>
      </form>
    </>
  );
}

export default Auth;
