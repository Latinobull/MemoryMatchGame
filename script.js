const grid = document.querySelector('.grid'); // HTML element for the game grid
const cards = []; // array to store the card objects
let flippedCards = []; // array to store the currently flipped cards
let score = 0; // variable to store the player's score
let canFlip = true; // boolean to prevent multiple card flips at once
const scoreEl = document.querySelector('#score'); // HTML element for the score section

const values = ['🍕', '🍔', '🍟', '🌭', '🥪', '🍩', '🍰', '🍫']; // Starting values for the icons of the game
