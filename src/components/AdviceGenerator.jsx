import React, { useState, useEffect } from 'react';
import './AdviceGenerator.css';
import diceIcon from '../assets/icon-dice.svg';

function AdviceGenerator() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');

  const apiURL = "https://api.adviceslip.com/advice";

  const getQuotes = async () => {
    try {
      const response = await fetch(apiURL);
      const quote = await response.json();

      setAdviceId(`ADVICE #${quote.slip.id}`);
      setAdvice(`"${quote.slip.advice}"`);
    } catch (error) {
      console.log("Encountered problem while fetching API data", error);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="advice-container">
      <h1 className="advice-generator-ID" id="advice-generator-output">{adviceId}</h1>
      <p className="advice-generator-text" id="advice-generator-text">{advice}</p>
      <div className="divider">
        <img className="divider-mobile" src="./images/pattern-divider-mobile.svg" alt="" />
        <img className="divider-desktop" src="./images/pattern-divider-desktop.svg" alt="" />
      </div>
      <div className="dice-button">
        <button className="advice-generator-button" id="advice-generator-button" onClick={getQuotes}>
          <img className="dice-icon" src={diceIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AdviceGenerator;
