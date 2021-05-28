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
      <div className="flex w-3/5 mr-10">
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
        <form onSubmit={handleLogin} method="POST">
          <input
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            onChange={({target}) => setEmailAddress(target.value)}
          />
          <input
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            onChange={({target}) => setPassword(target.value)}
          />
          <button
            disable={isInvalid}
            type="submit"
            // need to put isInvalid on separate line or it won't read correctly
            className={`bg-green-500 text-white w-full rounded h-8 font-bold
            ${isInvalid && 'opacity-50'}`}
          >
            Log In
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
        <p className="text-sm">Don't have an account? {` `}</p>
      </div>
    </div>
  )
}

export default Login;
