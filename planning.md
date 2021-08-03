## blackjack
- winning condition: get 21 score
- losing condition: getting over 21 or other player gets 21

## rules

- If the player has blackjack, they win, unless the dealer also has blackjack, in which case the game is a tie.

- If the dealer busts and the player doesn't, the player wins.

- If the player busts, the dealer wins.

- If the player and the dealer both don't bust, whoever is closest to 21 wins

## computer dealer
- deals 2 card at start
- player decides to hit or stand

1 player

52 card deck

## user side:
- buttons: hit, stand, double down, surrender, reset
- score
- card display
  - deck
  - dealers hand back facing
  - players hand front facing
  - keep track of cards using session storage or node
  - card object
    - card images
    - available cards