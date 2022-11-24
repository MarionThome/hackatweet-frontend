import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
//import { Modal } from 'antd';
// import Moment from 'react-moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tweets from './Tweets';


function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModalSignup = () => {
    setIsModalOpen(true);
  };

  const handleOkSignup = () => {
    setIsModalOpen(false);
  };

  const handleCancelSignup = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <main className={styles.main}>

        <div className={styles.imageback}>
          <FontAwesomeIcon icon={faTwitter} className={styles.iconBack} />
        </div>
        <div className={styles.signContainer}>
          <h1>See what's happening</h1>
          <h2>Join Hackatweet today.</h2>

          <div className={styles.signButtonsContainer}>
            <div onClick={showModalSignup} className={styles.btnSignUp}>Sign up</div>
            <p>Already have an account?</p>
            <div className={styles.btnSignIn}>Sign in</div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;
