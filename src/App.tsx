import { useEffect, useState } from 'react';
import './App.css';
import { getRandomWord } from './helpers/getRandomWord';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';

function App() {
  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attemps, setAttemps] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  // check if a person lose
  useEffect(() => {
    if (attemps >= 9) {
      setLose(true);
    }
  }, [attemps]);

  // check if a person wins
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');

    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord, word]);

  // to check the letter
  const checkLetter = (letter: string) => {

    if (lose) return;
    if (won) return;

    if (!word.includes(letter)) {
      setAttemps(Math.min(attemps + 1, 9));
      return;
    }

    // to verify the hidden word
    const hiddenWordArray = hiddenWord.split(' ');

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(' '));
  };

  const newGame  = () => {
    const newWord = getRandomWord();

    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setAttemps(0);
    setLose(false);
    setWon(false);
  }

  return (
    <div className='App'>
      {/* Images */}
      <HangImage imageNumber={attemps} />

      {/* Hidden word */}
      <h3>{hiddenWord}</h3>

      {/* Counts */}
      <h3>Counts: {attemps}</h3>

      {/* Message if you win */}
      {won ? <h2>Congrats, you win!!!</h2> : ''}

      {/* Message if you lose */}
      {lose ? <h2>You lose, the correct word was {word}</h2> : ''}

      {/* Buttons */}
      {letters.map((letter) => (
        <button onClick={() => checkLetter(letter)} key={letter}>
          {letter}
        </button>
      ))}

      <br />
      <br />
      <button onClick={newGame}>New Game</button>
    </div>
  );
}

export default App;
