let deckId = '';
let playerScore = 0;
let playerCurrentHand = [];

function startGame() {
	// getting deck_id from api
	fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
		.then(res => res.json()) // parse response as JSON
		.then(data => {
			deckId = data.deck_id

		})
		.catch(err => {
			console.log(`error ${err}`)
		});

	
	let player1Draw = document.querySelector('#player1-draw-card');
	let player2Draw = document.querySelector('#player2-draw-card');

	player1Draw.addEventListener('click', () => {
		drawCards(1, "player1");
	});

	player2Draw.addEventListener('click', () => {
		drawCards(1, "player2");
	});

	// drawing a card from the deck, displaying the image of the card
	// ISSUE: string value king, jack, ace, queen are nan
	function drawCards(amountOfCards, playerPressed) {

		const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${amountOfCards}`

		fetch(url)
			.then(res => res.json()) // parse response as JSON
			.then(data => {
				// console.log(`Cards pulled from deck: ${data.cards.value} of ${data.cards.suit}`)
				// for (card in data.cards) {
				// 	playerCurrentHand.push(card)
				// }
				// data.cards.forEach((card) => {
				// 	console.log(`${card.value} of ${card.suit}`);
				// 	let cardValueNumber = Number(card.value);
				// 	if (cardValueNumber == "KING" || cardValueNumber == "QUEEN" || cardValueNumber == "JACK") {
				// 		playerScore += 10;
				// 	} else if (cardValueNumber == "ACE") {
				// 		playerScore += 1;
				// 	} else {
				// 		playerScore += cardValueNumber;
				// 	}
				// 	console.log("Score: " + playerScore);
				// })
				console.log("Current hand: " + data.cards)
				// let val1 = Number(cardValue( data.cards[0].value ));
				// let val2 = Number(cardValue( data.cards[1].value ));
				document.querySelector('#card1').src = data.cards[0].image;
				// document.querySelector('#card2').src = data.cards[1].image;
				// document.querySelector('#score-container').innerHTML = val1 + val2;
				// console.log(`${val1} ${val2}`);
				// console.log(`${data.cards[0].value} of ${data.cards[0].suit}: ${Number(cardValue(data.cards[0].value))}`);
				// console.log(`${data.cards[1].value} of ${data.cards[1].suit}: ${Number(cardValue(data.cards[1].value))}`);
			})
			.catch(err => {
				console.log(`error ${err}`)
			});
	}

	// check card value and add to score
	function cardValue(val) {
		if (val == "KING" || val == "QUEEN" || val == "JACK") {
			return playerScore += 10;
		} else if (val == "ACE") {
			return playerScore += 1;
		} else {
			return playerScore += val;
		}
	}


	// constantly check player score and call cardValue until playerScore >= 21
	// while (playerScore < 21) {
	// 	cardValue();
	// 	if (playerScore > 21) {
	// 		console.log("Player busts!")
	// 		break;
	// 	} else if(playerScore === 21) {
	// 		// change to inner html later
	// 		console.log("Player wins!")
	// 		break;
	// 	}
	// }
}

startGame()