class Cards {
    constructor() {
        this.deck = {
            "clubs": ['King', 'Queen', 'Jack', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            "spades": ['King', 'Queen', 'Jack', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            "hearts": ['King', 'Queen', 'Jack', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            "diamonds": ['King', 'Queen', 'Jack', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        };
        this.cardsAvailable = [this.deck];
        this.playerHand = [];
        
        this.playerScore = 0;
    }

    shuffleDeck() {}

    score() {
        if (this.playerHand == "King" || this.playerHand == "Jack" || this.playerHand == "Queen") {
            this.playerScore += 10;
            return this.playerScore;
        }
    }

    passCard() {
        let shiftedCard
        for (let i = 0; i < 3; i++) {
            shiftedCard = this.cardsAvailable[0]["clubs"].shift();
        }
        return this.playerHand.push(shiftedCard)
    }

}

// start game
function startGame() {
    let newDeck = new Cards();
    newDeck.passCard();
    newDeck.score();
    console.log(newDeck);
    console.log(`available cards: ${newDeck.cardsAvailable[0]["clubs"]}`);
}

startGame()
