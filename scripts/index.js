// ISSUE: playerhand has no way of keeping track the of the suit
class Deck {
    constructor() {
        this.cards = {
            "clubs": ['King', 'Queen', 'Jack', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            "spades": ['King', 'Queen', 'Jack', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            "hearts": ['King', 'Queen', 'Jack', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            "diamonds": ['King', 'Queen', 'Jack', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        };
        // this.shuffledCards = [Math.Floor(Math.random(this.card))]
        this.cardsAvailable = this.cards;
        this.playerHand = [];
        
        this.playerScore = 0;
    }

    shuffleDeck() {
        // this will iterate through the available cards  and return the shuffledDeck in the constructor
        // we wanted to map to create a shuffled array of objects
        Object.keys(this.cardsAvailable).map((key, index) => {
            let something = this.cardsAvailable[key];
            console.log(something);
        })    
    }

    score() {
        if (this.playerHand == "King" || this.playerHand == "Jack" || this.playerHand == "Queen") {
            this.playerScore += 10;
            return this.playerScore;
        }
    }

    // player clicks hit, passCard() gets called
    // 1 card gets passed from the shuffledDeck to the playerHand
    // we this.cardsAvailable[Math.floor(Math.random()),Math.floor(Math.random())].shift()
    // ISSUE: newPlayerHand becomes a multi dimensional array
    passCard() {
        // let newPlayerHand = [];
        // for (let i = 0; i < cardsToDeal; i++) {
        //     let shiftedCard = this.cardsAvailable["spades"].shift();
        //     newPlayerHand.push(shiftedCard);
        // }

        // return this.playerHand.push(newPlayerHand);
    }
}

// start game
// shuffleDeck(), call the passCard(), which will check if player has cards then will deal 2 if the player doesn't
// update score constantly throughout the game
function startGame() {
    let newDeck = new Deck();
    newDeck.passCard();
    newDeck.score();
    console.log(newDeck);
    console.log(`available cards: ${newDeck.cardsAvailable["spades"]}`);
}

startGame()


// generating an array with random numbers
// this could be making the time complexity worse 
var makeRandomArray = function (min, max, amountOfNumbers) {
    var randomArray = [];
    // getting a random number, converting from float to whole number, pushing to array, and looping as many times as amountOfNumbers param
    for (var i = 0; i < amountOfNumbers; i++) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }
    console.log(randomArray);
    return randomArray;
};
// var generatedRandomArray = makeRandomArray(1, 1000, 100);





// const persons = [
//     { firstname: "Malcom", lastname: "Reynolds" },
//     { firstname: "Kaylee", lastname: "Frye" },
//     { firstname: "Jayne", lastname: "Cobb" }
// ];

// persons.map(getFullName);

// function getFullName(item) {
//     return = [item.firstname, item.lastname].join(" ");
// }