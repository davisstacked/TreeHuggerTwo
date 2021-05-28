code I like:

Login: 
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    }
    catch (error) {
      <!-- resets form -->
      setEmailAddress('');
      setPassword('');
      setError(error.message);
      console.log(error.message)
    }
  };