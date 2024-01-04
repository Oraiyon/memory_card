import "./Scoreboard.css"

const Scoreboard = (props) => {
    return (
        <div className="scoreboard">
            <div>Current Score: <b>{props.currentScore}</b></div>
            <div>Best Score: <b>{props.bestScore}</b></div>
        </div>
    );
}

export default Scoreboard