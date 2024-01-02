import "./Scoreboard.css"

const Scoreboard = (props) => {
    return (
        <div className="scoreboard">
            <div>Current Score: {props.currentScore}</div>
            <div>Best Score: {props.bestScore}</div>
        </div>
    );
}

export default Scoreboard