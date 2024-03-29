import './WinnerModal.css'

const WinnerModal = (props) => {
    const cards = document.querySelectorAll(".card");

    const handleReset = () => {
        cards.forEach(card => {
            card.disabled = false;
        });
        props.setCurrentScore(c => (0));
        props.setBestScore(b => (0));
        props.setSelected(s => ([]));
    }

    if (props.currentScore === 16) {
        cards.forEach(card => {
            card.disabled = true;
        });

        return (
            <div className="winnerModal">
                <p>YOU WIN!</p>
                <button onClick={handleReset}>Play Again?</button>
            </div>
        );
    }
}

export default WinnerModal