import styles from "../styles/RightSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
// import { Modal } from 'antd';
// import Moment from 'react-moment';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHashtag } from "../reducers/hashtags"
import { useRouter } from 'next/router'


function RightSection(){
    const router = useRouter()
    const dispatch = useDispatch()
    const hashtagToSave = useSelector((state) => state.hashtag.value)
    console.log(hashtagToSave)

    const handleRedirection = (name) => {
      dispatch(updateHashtag(name))
      setTimeout(function(){
        router.push("/trends")
     }, 1000);
    }


    const tweets = useSelector((state) => state.tweets.value);
    const hashtags = tweets.map(e => e.hashtag.map(e => e.toLowerCase())).flat()
    const uHashtags = [...new Set(hashtags)].filter(e => e !== "")

    const leftCollContent = uHashtags.map(e => {
        const filter = hashtags.filter(item => item === e)
        return <div className={styles.itemTrend}>
            <h3 onClick={() => handleRedirection(e)}>{e}</h3>
            <span>{filter.length} Tweets</span>
        </div>
    })
 


    return(
    <div>
        <h2>Trends</h2>
        <div className={styles.trendsContainer}>
            {leftCollContent}
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