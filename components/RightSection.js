import styles from "../styles/RightSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
// import { Modal } from 'antd';
// import Moment from 'react-moment';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function RightSection(){


    

    return(
    <div>
        <h2>Trends</h2>
        <div className={styles.trendsContainer}>
          {/* <div className={styles.itemTrend}>
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
          </div> */}
        </div>
     </div>
    )
}

export default RightSection