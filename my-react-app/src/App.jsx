import { useState, useEffect } from 'react'
import './App.css'
import Scoreboard from './Scoreboard.jsx'
import Cards from './Cards.jsx';
import WinnerModal from './WinnerModal.jsx';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <header>
        <h2>Get points by clicking on a pokemon, but don't repeat a pick!</h2>
        <Scoreboard 
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            bestScore={bestScore}
            setBestScore={setBestScore}/>
      </header>
      <div className='container'>
        <Cards
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          bestScore={bestScore}
          setBestScore={setBestScore}/>
        <WinnerModal currentScore={currentScore}/>
      </div>
    </>
  );
}

export default App