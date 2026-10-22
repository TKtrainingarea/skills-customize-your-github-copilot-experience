# 📘 Assignment: Hangman Game

## 🎯 Objective

Build a playable Hangman game in Python. Practice using strings, lists, loops, conditionals, random selection, and user input.

## 📝 Tasks

### 🛠️	Set Up the Game

#### Description
Create the game setup: choose a word at random from a predefined list and prepare the progress display and incorrect-guess counter.

#### Requirements
Completed program should:

- Select one word randomly from a list containing at least five words.
- Display one underscore for each letter in the hidden word.
- Start with a fixed number of incorrect guesses available and show how many remain.


### 🛠️	Handle Guesses and Finish the Game

#### Description
Let the player guess letters until they reveal the word or run out of incorrect guesses. Update and display the game state after each guess.

#### Requirements
Completed program should:

- Accept a letter guess from the player and compare it with the hidden word without regard to letter case.
- Reveal every occurrence of a correctly guessed letter in the progress display.
- Reduce the remaining incorrect guesses when the player guesses a letter that is not in the word.
- End when all letters are revealed or no incorrect guesses remain, and display a clear win or loss message.
