import React, { useEffect, useState } from 'react';
import GoogleLoginButton from '../components/login/GoogleLoginButton';

const LoginPage: React.FC<{}> = () => {
  return (
    <>
      <img src="/logo.svg" width={'100px'} />
      <h1>
        Easy
        <br />- output
      </h1>
      <p>output을 쉽게! input은 덤으로!</p>
      <GoogleLoginButton />
    </>
  );
};

export default LoginPage;
