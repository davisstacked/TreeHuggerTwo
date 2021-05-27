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
    <div>
      <h1>I am the login page</h1>
    </div>
  )
}

export default Login;
