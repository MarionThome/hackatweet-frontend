import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser, faXmark, faEye } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
// import Moment from 'react-moment';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import Tweets from './Tweets';


function Home() {
  const router = useRouter()
  const [displayModalSignUp, setDisplayModalSignUp] = useState(false);
  const [displayModalSignIn, setDisplayModalSignIn] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
 
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
  
  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({name: name, username: username, password: password }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
          router.push("/tweets")
				}
			});
	};

  const handleSignin = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({username: username, password: password }),
		}).then(response => response.json())
			.then(data => {
        console.log(data)
				if (data.result) {
					router.push("/tweets")
				}
			});
	};


  
  return (
    <div>
      <main className={styles.main}>
        
        <div className={styles.modalSignup} style={modalSignupStyle}>
        <FontAwesomeIcon onClick={showModalSignup} icon={faXmark} className={styles.crossIcon} />
          <FontAwesomeIcon icon={faTwitter} className={styles.signLogo}/>
          <p>Create your Hackatweet account</p>
					<input type="text" placeholder="Firstname" id="signFirstName" onChange={(e) => setName(e.target.value)} value={name} />
					<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setUsername(e.target.value)} value={username} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setPassword(e.target.value)} value={password} />
					<div id="register" onClick={() => handleRegister()} className={styles.btnSignUp}>Register</div>
        </div>
        <div className={styles.modalSignup} style={modalSignInStyle}>
        <FontAwesomeIcon onClick={showModalSignIn} icon={faXmark} className={styles.crossIcon} />
          <FontAwesomeIcon icon={faTwitter} className={styles.signLogo}/>
          <p>Sign-In</p>
					<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setUsername(e.target.value)} value={username} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setPassword(e.target.value)} value={password} />
					<div id="register" onClick={() => handleSignin()} className={styles.btnSignUp}>Sign-In</div>
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
