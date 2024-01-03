import { useState, useEffect } from 'react'
import './App.css'
import Scoreboard from './Scoreboard.jsx'
import Cards from './Cards.jsx';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemons, setPokemons] = useState(
    ["charizard", "pikachu", "mew","rayquaza",
    "snorlax", "lugia",  "mewtwo", "bulbasaur",
    "gengar", "magikarp", "groudon", "zapdos",
    "kyogre", "squirtle", "charmander", "geodude"]
  );
  
  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <header>
        <h2>Get points by clicking on a pokemon, but don't repeat a pick!</h2>
        <Scoreboard 
            currentScore={currentScore} 
            bestScore={bestScore}/>
      </header>
      <Cards 
        pokemons={pokemons} 
        setPokemons={setPokemons}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}/>
    </>
  );
}

export default App