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
  return (
    <div className={styles.mainSection}>
      <div className={styles.leftSection}>
        <LeftSection/>
      </div>
      <div className={styles.middleSection}></div>
      <div className={styles.rightSection}></div>
    </div>
  );
}

export default Tweets;
