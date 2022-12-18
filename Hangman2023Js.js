const wordList = ["javascript", "html", "css", "python", "java"];

const word = wordList[Math.floor(Math.random() * wordList.length)];

let wordPlaceholder = "";
for (let i = 0; i < word.length; i++) {
  wordPlaceholder += "_";
}

let lives = 6;

let lettersGuessed = [];

while (lives > 0 && wordPlaceholder.indexOf("_") !== -1) {
  // Show the player their progress
  console.log(`Word: ${wordPlaceholder}`);
  console.log(`Lives: ${lives}`);
  console.log(`Letters guessed: ${lettersGuessed.join(", ")}`);

  const guess = prompt("Guess a letter or the whole word.");
  if (guess === null) {
    break;
  }

  if (guess.length === 1) {
    if (lettersGuessed.indexOf(guess) !== -1) {
      console.log("You've already guessed that letter. Try again.");
      continue;
    }

    lettersGuessed.push(guess);

    if (word.indexOf(guess) !== -1) {
      let tempWordPlaceholder = "";
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          tempWordPlaceholder += guess;
        } else {
          tempWordPlaceholder += wordPlaceholder[i];
        }
      }
      wordPlaceholder = tempWordPlaceholder;
    } else {
      lives--;
    }
  } else {
    // Whole word guess
    if (guess === word) {
      // Correct guess
      wordPlaceholder = word;
    } else {
      lives--;
    }
  }
}

if (wordPlaceholder.indexOf("_") === -1) {
  console.log("You won!");
} else {
  console.log("You lost.");
}
