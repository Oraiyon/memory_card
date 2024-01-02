import "./Cards.css"

const Cards = (props) => {
    const capitalizeName = (name) => {
        const firstLetter = name.charAt(0).toUpperCase();
        const rest = name.slice(1)
        return firstLetter.concat(rest);
    }

    return (
        <div className="cards">
            {props.cards.map(card => 
                <button className="card" key={card.id}>
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