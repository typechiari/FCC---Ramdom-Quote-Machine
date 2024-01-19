import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaTwitter } from "react-icons/fa";
import quotes from "./assets/quotes.json";
import './App.css';

const Transition = "all 2s";

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 150);
  const green = Math.floor(Math.random() * 150);
  const blue = Math.floor(Math.random() * 150);

  return `rgb(${red}, ${green}, ${blue})`;
};

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [randomColor, setRandomColor] = useState(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div className='background flex flex-col justify-center align-center text-thin p-[2rem]'
         style={{
           backgroundColor: randomColor,
           transition: Transition,
           height: '100vh',
           width: '100vw',
           margin: 0,
           padding: 0,
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
         }}>
      <div id="quote-box" className='flex flex-col justify-center align-center bg-white w-[550px] p-[35px] rounded'>
        <h2 id="text" style={{ color: randomColor, transition: Transition, }} className='text-[1.7rem] inline'>
          <FaQuoteLeft size="30" style={{ marginRight: "10px", color: randomColor, transition: Transition, display: "inline", }} />
          {quote.quote}
          <FaQuoteRight size="30" style={{ marginLeft: "10px", color: randomColor, transition: Transition, display: "inline", }} />
        </h2>
        <h4 id="author" style={{ color: randomColor, transition: Transition, }} className=' pt-[1rem]'>
          - {quote.author}
        </h4>
        <div className='flex justify-between pt-[1.5rem]'>
          <button id="new-quote" style={{
            color: randomColor,
            backgroundColor: randomColor,
            color: 'white',
            transition: Transition,
          }} onClick={changeQuote} className='w-[100px] h-[38px] rounded text-xs'>
            New Quote
          </button>
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id='tweet-quote'>
            <FaTwitter size="30" style={{ color: randomColor, transition: Transition, }} />
          </a>
        </div>
      </div>
      <p className='text-white pt-[1rem] text-xs'>
        by <a href="https://github.com/typechiari">chiari</a>
      </p>
    </div>
  );
}

export default App;
