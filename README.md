challenges.
downloading tailwind. how it was challenging. 

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

app.js
used Lazy loading to cut down on runtime.
  const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));