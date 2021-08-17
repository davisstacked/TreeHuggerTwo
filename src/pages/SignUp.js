import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { doesUsernameExist } from '../services/firebase';

const SignUp = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '' || username === '';

  const handleSignUp = async (e) => {
    e.preventDefault();

    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password)
        
        // authentication within firebase (where we got createUserwithemailandpassword function)
          // -> emailAddress and password and username (displayName)
        await createdUserResult.user.updateProfile({
          displayName: username
        });

        // firebase user collection (create a document)
        await firebase.firestore().collection('users').add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          dateCreated: Date.now()
        });

        history.push(ROUTES.DASHBOARD);
      }
      catch (error) {
        setFullName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    } else {
      setError('That username is already taken, please try another.')
    }
  };

  useEffect(() => {
    document.title = 'Sign up - Tree Hugger';
  }, []);

  return (
    <div
      className="container flex mx-auto max-w-screen-lg items-center h-screen bg-tan-100 border border-green-100 px-6">
      <div className="flex w-3/5 mr-10">
        <img
          className="rounded-xl max-w-full"
          src="/images/treehugger.jpeg"
          alt="treehugger logo" />
      </div>
      <div className="flex flex-col w-2 w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-green-200 mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img
              className="mt-2 w-6/12 mb-4 rounded-3xl"
              src="/images/logo.png"
              alt="TreeHugger Logo" />
          </h1>
          {error && <p className="mb-4 text-xs text-pink-alert">{error}</p>}
          <form onSubmit={handleSignUp} method="POST">
            <input
              className="text-sm text-green-900 w-full mr-3 py-5 px-4 h-2 border border-green-200 rounded mb-2"
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <input
              className="text-sm text-green-900 w-full mr-3 py-5 px-4 h-2 border border-green-200 rounded mb-2"
              aria-label="Enter your full name"
              type="text"
              placeholder="Full name"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            <input
              className="text-sm text-green-900 w-full mr-3 py-5 px-4 h-2 border border-green-200 rounded mb-2"
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              className="text-sm text-green-800 w-full mr-3 py-5 px-4 h-2 border border-green-200 active:border-green-700 rounded mb-2"
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disable={isInvalid}
              type="submit"
              // need to put isInvalid on separate line or it won't read correctly
              className={`bg-green-500 rounded text-white w-full rounded border border-green-600 h-8 font-bold
              ${isInvalid && 'opacity-50'}`}
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="flex rounded justify-center items-center flex-col w-full bg-white p-4 border border-green-200">
          <p className="text-sm">Already have an account? {` `}
            <Link
              to={ROUTES.LOGIN}
              className="font-bold text-green-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
