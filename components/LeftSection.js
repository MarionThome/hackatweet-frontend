import styles from "../styles/LeftSection.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
// import { Modal } from 'antd';
// import Moment from 'react-moment';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Trends from "./Trends";

function LeftSection() {
    const users = useSelector((state) => state.users.value);


    return (
        <div className={styles.mainContainerLeft}>
            <FontAwesomeIcon icon={faTwitter} className={styles.iconBack} />
            <div className={styles.userinfos}>
                <div className={styles.imgContainer}></div>
                <div className={styles.currentUser}>
                    <div className={styles.avatar}></div>
                    <div>
                        <p className={styles.name}>{users.name}</p>
                        <p className={styles.username}>@{users.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;