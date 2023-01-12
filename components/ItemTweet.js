import styles from "../styles/Tweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import{ removeTweets} from '../reducers/tweets';
import { useState } from "react";

function ItemTweet(props) {
    
    const dispatch= useDispatch()
    const currentUser = useSelector((state) => state.users.value);
    const [isLiked, setIsLiked] = useState(false);
    const [numberLike, setNumberLike] = useState(props.likes);

    const deleteTweet =() => {
        console.log('props:',props)
        dispatch(removeTweets(props))
        fetch('https://hackatweet-backend-five.vercel.app/tweets/delete', {
            method:'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({tweet: props.tweet, username: props.username }),
        })
        .then(response => response.json())
        .then(data => console.log('deleted :', data))
    }
    
    let coeurColor = { };
    const handleLike = () => {
        setIsLiked(!isLiked)
        console.log(isLiked)
        if(!isLiked){
            setNumberLike(numberLike + 1);
        }else{
            setNumberLike(numberLike -1 )
        }
        

    }
    if(isLiked){
        console.log(coeurColor);
        coeurColor = { 'color': 'red' };
    }    
    

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
                <FontAwesomeIcon onClick={() => handleLike()} icon={faHeart} className={styles.iconCoeur} style={coeurColor} />
                <span className={styles.likeCounter}>{numberLike}</span>
                {currentUser.username===props.username ? <FontAwesomeIcon className={styles.iconTrash} onClick={ ()=> deleteTweet(props)} icon={faTrash}/> : ''}
            </div>
        </div>
    )
}

export default ItemTweet;