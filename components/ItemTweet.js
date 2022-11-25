import styles from "../styles/Tweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart} from '@fortawesome/free-solid-svg-icons';


function ItemTweet() {
    return (
        <div className={styles.tweetItem}>
            <div className={styles.tweetHead}>
                <div className="avatar"></div>
                <p className={styles.name}>John</p>
                <span className="username">@users.name</span>
                <span>- 5 hours</span>
            </div>
            <div className={styles.tweetBody}>
                <p>Welcome to #hackatweet guys !</p>
            </div>
            <div className={styles.tweetBottom}>
                <FontAwesomeIcon icon={faHeart} className={styles.iconCoeur} />
                <span className={styles.likeCounter}>5</span>
            </div>
        </div>
    )
}

export default ItemTweet;