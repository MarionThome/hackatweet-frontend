import styles from "../styles/Tweets.module.css";
import LeftSection from "./LeftSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
// import { Modal } from 'antd';
// import Moment from 'react-moment';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Trends from "./Trends";


function Tweets() {
  const [tweetToPost, setTweetToPost] = useState ('')
  const login = useSelector((state) => state.users.value);
  console.log(login)
  return (
    <div className={styles.mainSection}>
      <div className={styles.leftSection}>
        <LeftSection />
      </div>
      <div className={styles.middleSection}>
        <h2>Home</h2>
        <div className={styles.tweetPostContainer}>
          <input type="text-area"  onChange={(e) => setTweetToPost(e.target.value)} value={tweetToPost} placeholder="Post something and try to be nice and respectfull" />
          <div className={styles.posterBottom}>
            <span className={styles.stringCounter}>{tweetToPost.length}/280</span>
            <div className={styles.btnTweet}>Tweet</div>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <h2>Trends</h2>
        <div className={styles.trendsContainer}>
          <div className={styles.itemTrend}>
            <h3>#hackatweet</h3>
            <span>2 Tweets</span>
          </div>
          <div className={styles.itemTrend}>
            <h3>#first</h3>
            <span>2 Tweets</span>
          </div>
          <div className={styles.itemTrend}>
            <h3>#cenation</h3>
            <span>2 Tweets</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweets;
