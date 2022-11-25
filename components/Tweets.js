import styles from "../styles/Tweets.module.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
// import { Modal } from 'antd';
// import Moment from 'react-moment';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTweets, initialiseTweets} from '../reducers/tweets';
import Trends from "./Trends";
import ItemTweet from "./ItemTweet";


function Tweets() {
  const dispatch = useDispatch();
  const [tweetToPost, setTweetToPost] = useState('')
  const login = useSelector((state) => state.users.value);


  useEffect(() => {
    fetch('http://localhost:3000/tweets', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}).then(response => response.json()).then(data => {
      if(data){
          dispatch(initialiseTweets(data.data))
      }
    })
  },[]);

    const tweets = useSelector((state) => state.tweets.value);
    console.log(tweets)

  return (
    <div className={styles.mainSection}>
      <div className={styles.leftSection}>
        <LeftSection />
      </div>
      <div className={styles.middleSection}>
        <div className={styles.middleHead}>
        
          <h2>Home</h2>
          <div className={styles.tweetPostContainer}>
            <input type="text-area" onChange={(e) => setTweetToPost(e.target.value)} value={tweetToPost} placeholder="Post something and try to be nice and respectfull" />
            <div className={styles.posterBottom}>
              <span className={styles.stringCounter}>{tweetToPost.length}/280</span>
              <div className={styles.btnTweet}>Tweet</div>
            </div>
          </div>
        </div>
        <div className={styles.tweetContainer}>
          <ItemTweet/>
        </div>
      </div>
      <div className={styles.RightSection}>
      <RightSection />
      </div>
    </div>
  );
}

export default Tweets;
