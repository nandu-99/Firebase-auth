import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { firebaseConfig } from './config/firebase';
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const Authen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function extractErrorCode(errorMessage) {
    const regex = /\((auth\/[^)]+)\)/;
    const match = errorMessage.match(regex);
    
    if (match) {
      return match[1];
    } else {
      return 'Unknown error';
    }
  }  

  const login = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert('Successfully signed in!');
      setUserEmail(user.email);
      setIsLoggedIn(true);
    } catch (e) {
      alert(extractErrorCode(e.message));
      setError(e.message);
    }
  };

  const signup = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert('Successfully signed up! Welcome ' + user.email);
      await set(ref(database, 'users/' + user.uid), {
        email: user.email
      });
      setUserEmail(user.email);
      setError('');
      setIsLoggedIn(true);
    } catch (e) {
      alert(extractErrorCode(e.message));
      setError(e.message);
    }
  };

  const logout = async (event) => {
    event.preventDefault();
    try {
      await signOut(auth);
      alert('Successfully signed out!');
      setUserEmail('');
      setIsLoggedIn(false);
    } catch (e) {
      alert('Error: ' + e.message);
    }
    setEmail('');
    setPassword('');
  };

  const googleSignIn = async (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert('Successfully signed in with Google!');
      await set(ref(database, 'users/' + user.uid), {
        email: user.email,
        name: user.displayName
      });
      setUserEmail(user.email);
      setIsLoggedIn(true);
    } catch (e) {
      alert('Error: ' + e.message);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', right: '0', top: '0', padding: '5px' }}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button onClick={login}>Sign In</button>
          <button onClick={signup}>Sign Up</button>
          <button onClick={googleSignIn} id="google" className="google">Sign In with Google</button>
        </>
      ) : (
        <>
          <p>Welcome, {userEmail}!</p>
          <button onClick={logout}>Sign out</button>
        </>
      )}
    </div>
  );
};

export default Authen;
