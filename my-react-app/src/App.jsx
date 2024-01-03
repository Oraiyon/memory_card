import { useState, useEffect } from 'react'
import './App.css'
import Scoreboard from './Scoreboard.jsx'
import Cards from './Cards.jsx';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  
  const pokemons = ["charizard", "pikachu", "mew", "rayquaza", 
                    "snorlax", "lugia",  "mewtwo", "bulbasaur",
                    "gengar", "magikarp", "groudon", "zapdos",
                    "kyogre", "squirtle", "charmander", "geodude"];

  // React.StrictMode displays fetched cards twice
  // Only in dev mode
  useEffect(
    () => {
      pokemons.map(pokemon => {
        const controller = new AbortController();
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
          .then(res => res.json())
          .then(data => setCards(c => ([...c, data])))
        return () => {
          controller.abort();
        }
      });
    },[]
  )

  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <header>
        <h2>Get points by clicking on a pokemon, but don't repeat a pick!</h2>
        <Scoreboard 
            currentScore = {currentScore} 
            bestScore = {bestScore}/>
      </header>
      <Cards cards = {cards}/>
    </>
  );
}

export default App