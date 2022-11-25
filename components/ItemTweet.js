import styles from "../styles/Tweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart} from '@fortawesome/free-solid-svg-icons';


function ItemTweet(props) {
    return (
        <div className={styles.tweetItem}>
            <div className={styles.tweetHead}>
                <div className="avatar"></div>
                <p className={styles.name}>{props.name}</p>
                <span className="username">@{props.username}</span>
                <span>{props.date}</span>
            </div>
            <div className={styles.tweetBody}>
                <p>{props.tweet}</p>
            </div>
            <div className={styles.tweetBottom}>
                <FontAwesomeIcon icon={faHeart} className={styles.iconCoeur} />
                <span className={styles.likeCounter}>{props.likes}</span>
            </div>
        </div>
    )
}

export default ItemTweet;