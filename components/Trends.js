import styles from "../styles/Trends.module.css";
import LeftSection from "./LeftSection";
import ItemTweet from "./ItemTweet";
import RightSection from "./RightSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
// import { Modal } from 'antd';
// import Moment from 'react-moment';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweets from "./Tweets";

function Trends() {
  const [trendToSearch, setTrendToSearch] = useState("");
  console.log(trendToSearch);
  return (
    <div className={styles.mainSection}>
      <div className={styles.leftSection}>
        <LeftSection />
      </div>
      <div className={styles.middleSection}>
        <div className={styles.middleHead}>
          <div className={styles.trendHeader}>
            <h2>Trends</h2>
            <input
              className={styles.trendSearch}
              type="search"
              placeholder="#Hashtag"
              onChange={(e) => setTrendToSearch(e.target.value)}
              value={trendToSearch}
            />
          </div>
        </div>
        <div className={styles.tweetContainer}>
          <ItemTweet />
        </div>
      </div>
      <div className={styles.rightSection}>
        <RightSection />
      </div>
    </div>
  );
}

export default Trends;
