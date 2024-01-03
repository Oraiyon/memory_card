import "./Cards.css"
import { useState, useEffect} from "react";

const Cards = (props) => {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        props.pokemons.map(pokemon => {
            const controller = new AbortController();

            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
                .then(res => res.json())
                .then(data => setCards(c => ([...c, data])))

            return () => {
            controller.abort();
            }
        });
    },[]);
    
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleClick = () => {
        const shuffled = shuffle(cards);
        setCards(c => (shuffled));
        props.setCurrentScore(c => (c + 1))
    }

    const capitalizeName = (name) => {
        const firstLetter = name.charAt(0).toUpperCase();
        const rest = name.slice(1)
        return firstLetter.concat(rest);
    }

    // React.StrictMode displays fetched cards twice
    // Only in dev mode
    return (
        <div className="cards">
            {cards.map(card => 
                <button className="card" 
                key={card.id + "-" + Math.random(10)}
                onClick={handleClick}>
                    <img src={card.sprites.front_default} 
                         alt="picture of pokemon" >
                    </img>
                    <div>{capitalizeName(card.name)}</div>
                </button>    
            )}
        </div>
    );
}

export default Cards