import { useState, useEffect } from 'react'
import './App.css'
import Scoreboard from './Scoreboard.jsx'
import Cards from './Cards.jsx';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([])
  
  useEffect(
    // React.StrictMode displays fetched cards twice
    // Only in dev mode
    () => {
      const controller = new AbortController();

      fetch("https://pokeapi.co/api/v2/pokemon/charizard/")
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setCards(c => ([...c, data]))
        });

      fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
        .then(res => res.json())
        .then(data => setCards(c => ([...c, data])));

      fetch("https://pokeapi.co/api/v2/pokemon/mew/")
        .then(res => res.json())
        .then(data => setCards(c => ([...c, data])));

      fetch("https://pokeapi.co/api/v2/pokemon/rayquaza/")
        .then(res => res.json())
        .then(data => setCards(c => ([...c, data])));

      fetch("https://pokeapi.co/api/v2/pokemon/snorlax/")
        .then(res => res.json())
        .then(data => setCards(c => ([...c, data])));

      fetch("https://pokeapi.co/api/v2/pokemon/lugia/")
        .then(res => res.json())
        .then(data => setCards(c => ([...c, data])));

      fetch("https://pokeapi.co/api/v2/pokemon/mewtwo/")
        .then(res => res.json())
        .then(data => setCards(c => ([...c, data])));

      fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur/")
        .then(res => res.json())
        .then(data => setCards(c => ([...c, data])));

      fetch("https://pokeapi.co/api/v2/pokemon/gengar/")
        .then(res => res.json())
        .then(data => setCards(c => ([...c, data])));

      fetch("https://pokeapi.co/api/v2/pokemon/magikarp/")
        .then(res => res.json())
        .then(data => setCards(c => ([...c, data])));

      fetch("https://pokeapi.co/api/v2/pokemon/groudon/")
        .then(res => res.json())
        .then(data => setCards(c => ([...c, data])));

      fetch("https://pokeapi.co/api/v2/pokemon/zapdos/")
        .then(res => res.json())
        .then(data => setCards(c => ([...c, data])));
      
      return () => {
        controller.abort();
      }
    },[]
  )

  return (
    <>
      <header>
        <h1>Memory Game</h1>
        <Scoreboard 
          currentScore = {currentScore} 
          bestScore = {bestScore}/>
      </header>
      <h2>Get points by clicking on a pokemon, but don't repeat a pick!</h2>
      <Cards cards = {cards}/>
    </>
  );
}

export default App