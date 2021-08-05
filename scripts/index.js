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

	// player decks

	// player controls
	let player1Draw = document.querySelector('#player1-draw-card');
	let player2Draw = document.querySelector('#player2-draw-card');

	// mouse controls to draw card
	player1Draw.addEventListener('click', () => {
		drawCards(1, "player1");
	});

	player2Draw.addEventListener('click', () => {
		drawCards(1, "player2");
	});

	// keyboard controls to draw card
	document.addEventListener('keydown', (event) => {
		if (event.key == "a") {
			drawCards(1, "player1");
		} else if (event.key == "k") {
			drawCards(1, "player2");
		}
	})

	// drawing a card from the deck, displaying the image of the card
	function drawCards(amountOfCards, playerPressed) {

		const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${amountOfCards}`

		let player1Hand;
		let player2Hand;

		fetch(url)
			.then(res => res.json()) // parse response as JSON
			.then(data => {
				// console.log(data.cards[0])

				// display seperate card based on which player pressed it
				if (playerPressed == "player1") {
					document.querySelector('#card1').src = data.cards[0].image;
					player1Hand = data.cards[0].value;
					console.log(player1Hand);
				} else if (playerPressed == "player2") {
					document.querySelector('#card2').src = data.cards[0].image;
					player2Hand = data.cards[0].value;
					console.log(player2Hand);
				}

				// win condition
				if (player1Hand == "JACK") {
					document.querySelector("#win-container").innerHTML = "PLAYER 1 WINS";
				} else if(player2Hand == "JACK") {
					document.querySelector("#win-container").innerHTML = "PLAYER 2 WINS";
				}

			})
			.catch(err => {
				console.log(`error ${err}`)
			});

	}
}