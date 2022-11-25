import styles from "../styles/LeftSection.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
// import { Modal } from 'antd';
// import Moment from 'react-moment';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {logout} from '../reducers/users';
import {useRouter} from 'next/router'



function LeftSection() {
    const router = useRouter()
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.value);
    const clickLogout = () => {
        dispatch(logout())
    }

    return (
        <div className={styles.mainContainerLeft}>
            <FontAwesomeIcon icon={faTwitter} className={styles.iconBack} onClick = {() => router.push("/tweets")
     }/>
            <div className={styles.userinfos}>
                <div className={styles.imgContainer}></div>
                <div className={styles.currentUser}>
                    <div className="avatar"></div>
                    <div>
                        <p className={styles.name}>{users.name}</p>
                        <p className="username">@{users.name}</p>
                    </div>
                    <div onClick={() => clickLogout()} className="btnLogout">Log Out</div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;