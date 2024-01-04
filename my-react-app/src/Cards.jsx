import "./Cards.css"
import { useState, useEffect} from "react";

const Cards = (props) => {
    const [cards, setCards] = useState([]);
    const pokemons = ["charizard", "pikachu", "mew","rayquaza",
                      "snorlax", "lugia",  "mewtwo", "bulbasaur",
                      "gengar", "magikarp", "groudon", "zapdos",
                      "kyogre", "squirtle", "charmander", "geodude"];

    useEffect(() => {
        pokemons.map(pokemon => {
            const controller = new AbortController();

            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setCards(c => ([...c, data]))
                })
            return () => {
            controller.abort();
            }
        });
    },[]);
    
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    };

    const handleScore = (id) => {
        if(!props.selected.includes(id)) {
            props.setSelected(s => ([...s, id]));
            props.setCurrentScore(c => (c + 1));
            if (props.currentScore === props.bestScore) {
                props.setBestScore(b => (b + 1));
            }
        } else {
            props.setSelected(s => ([]));
            props.setCurrentScore(c => (0));
        }
    }

    const handleClick = (id) => {
        const shuffled = shuffle(cards);
        setCards(c => (shuffled));
        handleScore(id);
    }

    const capitalizeName = (name) => {
        const firstLetter = name.charAt(0).toUpperCase();
        const rest = name.slice(1)
        return firstLetter.concat(rest);
    }

    // React.StrictMode displays fetched cards twice in dev mode
    return (
        <div className="cards">
            {cards.map(card => 
                <button 
                className="card"
                id={card.types[0].type.name} 
                key={card.id}
                onClick={() => handleClick(card.id)}>
                    <img src={card.sprites.front_default} 
                         alt={card.name}>
                    </img>
                    <p>{capitalizeName(card.name)}</p>
                </button>    
            )}
        </div>
    );
}

export default Cards