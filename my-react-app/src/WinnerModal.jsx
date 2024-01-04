import './WinnerModal.css'

const WinnerModal = (props) => {
    if (props.currentScore === 3) {
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.disabled = true
        });

        return (
            <div className="winnerModal">
                <p>YOU WIN!</p>
                <button>Reset</button>
            </div>
        );
    }
}

export default WinnerModal