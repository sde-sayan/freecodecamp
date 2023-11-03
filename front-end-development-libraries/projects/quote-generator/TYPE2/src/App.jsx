import Header from "./components/Header"
import NewQuoteButton from "./components/NewQuoteButton"
import Quote from "./components/Quote"
import QuoteAuthor from "./components/QuoteAuthor"
import TweetButton from "./components/TweetButton"
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from "react"

library.add(fas, faQuoteLeft, faQuoteRight, faXTwitter)

export default function App () {
  // console.log("App rendered");

  // const [randomQuote, setRandomQuote] = useState('');
  // const [quoteAuthor, setQuoteAuthor] = useState('');

  // useEffect(() => {
  //   setRandomQuote('After Use Effect');
  //   console.log('called App useeffect');
  // }, []);

  const initialQuoteValues = {
    randomQuote: "",
    quoteAuthor: ""
  };

  const [data, setData] = useState(initialQuoteValues);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchRandomQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      
      if (!res.ok) {
        const message = `An error has occured: ${res.status}`;
        throw new Error(message);
      
      }
      const result = await res.json();

      setData({ randomQuote: result.content, quoteAuthor: result.author });
      // setRandomQuote(result.content); // render 2nd time by useEffect
      // setQuoteAuthor(result.author); // rendering 3rd time by useEffect
    } catch (error) {
      setErrorMsg(error.message);
    }
  }

  useEffect(async () => {
    await fetchRandomQuote();
    // console.log('called App useeffect');
  }, []);

  return (
    <div className="wrapper" td="quote-box">
      <Header />
      <div className="content">
        <Quote quote={ data.randomQuote } />
        <QuoteAuthor author={ data.quoteAuthor } />
        </div>
      <div className="buttons">
        <TweetButton quote={ data.randomQuote } />
        <NewQuoteButton onButtonClick={fetchRandomQuote} />
      </div>
    </div>
  )
}
