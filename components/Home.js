import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser, faXmark, faEye } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
// import Moment from 'react-moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tweets from './Tweets';


function Home() {
  const [displayModalSignUp, setDisplayModalSignUp] = useState(false);
  const [displayModalSignIn, setDisplayModalSignIn] = useState(false);
  const [signUpFirstName, setSignUpFirstName] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
  const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');
  const showModalSignup = () => {
    setDisplayModalSignUp(!displayModalSignUp)
    console.log('click')
  };
  const showModalSignIn = () => {
    setDisplayModalSignIn(!displayModalSignIn)
    console.log('click')
  };
  let modalSignupStyle = {'display': 'none'}
  if(displayModalSignUp) {
    modalSignupStyle = {'display': 'flex'} 
  } 
  let modalSignInStyle = {'display': 'none'}
  if(displayModalSignIn) {
    modalSignInStyle = {'display': 'flex'} 
  } 


  
  return (
    <div>
      <main className={styles.main}>
        
        <div className={styles.modalSignup} style={modalSignupStyle}>
        <FontAwesomeIcon onClick={showModalSignup} icon={faXmark} className={styles.crossIcon} />
          <FontAwesomeIcon icon={faTwitter} className={styles.signLogo}/>
          <p>Create your Hackatweet account</p>
					<input type="text" placeholder="Firstname" id="signFirstName" onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName} />
					<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
					<div id="register" onClick={() => handleRegister()} className={styles.btnSignUp}>Register</div>
        </div>
        <div className={styles.modalSignup} style={modalSignInStyle}>
        <FontAwesomeIcon onClick={showModalSignIn} icon={faXmark} className={styles.crossIcon} />
          <FontAwesomeIcon icon={faTwitter} className={styles.signLogo}/>
          <p>Sign-In</p>
					<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
					<div id="register" onClick={() => handleRegister()} className={styles.btnSignUp}>Sign-In</div>
        </div>
   

        <div className={styles.imageback}>
          <FontAwesomeIcon icon={faTwitter} className={styles.iconBack} />
        </div>
        <div className={styles.signContainer}>
          <h1>See what's happening</h1>
          <h2>Join Hackatweet today.</h2>

          <div className={styles.signButtonsContainer}>
            <div onClick={showModalSignup} className={styles.btnSignUp}>Sign up</div>
            <p>Already have an account?</p>
            <div onClick={showModalSignIn} className={styles.btnSignIn}>Sign in</div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;
