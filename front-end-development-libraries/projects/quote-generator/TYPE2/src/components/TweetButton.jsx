import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const TweetButton = (props) => {
    // const [text, setText] = useState(props.quote); // Doing this won't change state of tweet component though parent rerendered by useEffect  
    const tweetURL = encodeURI(`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${props.quote}`);
    // console.log('twee', props.quote);

    return (
        <div className='tweet-btn'>
            <a href={ tweetURL } target='_blank' id="tweet-quote"><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></a>
        </div>
    )
}

export default TweetButton;
