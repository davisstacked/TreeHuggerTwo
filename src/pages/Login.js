import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from '../context/firebase';

const Login = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => { };

  useEffect(() => {
    document.title = 'Login - TreeHugger';
  }, []);

  return (
    <div
      className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          className="rounded-3xl max-w-full"
          src="/images/treehugger.jpeg"
          alt="treehugger logo" />
      </div>
      <div className="flex flex-col w-2 w-2/5">
        <h1 className="flex justify-center w-full">
          <img
            className="mt-2 w-6/12 mb-4 rounded-3xl"
            src="/images/logo.png"
            alt="TreeHugger Logo" />
        </h1>
        {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
      </div>
    </div>
  )
}

export default Login;
