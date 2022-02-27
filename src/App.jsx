import { useState } from 'react';
import './App.css';

const App = ({ ports }) => {
  const [win, setWin] = useState(false);
  const [turns, setTurns] = useState([]);
  const [board, setBoard] = useState(randomBoard());
  const addTurn = ports.addTurn.send;

  ports.sendTurns.subscribe((items) => setTurns(items));

  const guess = (guess) => {
    let passed = true;
    for (let i = 0; i <= 3; i++) {
      if (guess[i] != board[i]) passed = false;
    }

    if (passed) setWin(true);
    else addTurn(guess);
  };

  if (win) alert('You Won!');

  const lastThreeTurns = turns.slice(Math.max(turns.length - 3, 0));

  return (
    <div className='App'>
      <h1>Mistermind</h1>
      <p className='guesses'>Guesses: {turns.length}</p>
      <ul className='board'>
        {/* <Solution board={board} /> */}
        {lastThreeTurns.map((attempt, i) => (
          <Attempt board={attempt} answer={board} />
          // <AttemptElm setAnswer={attempt} setBoard={board} key={i} />
        ))}
        <Guess makeGuess={guess} />
      </ul>
    </div>
  );
};

/**
 *
 * This is an unused React component for displaying the answer to Mistermind.
 * Only to be used for development
 *
 */

const Solution = ({ board, key }) => (
  <>
    {board.map((square) => (
      <li className={`square ${square}`} />
    ))}
  </>
);

const Attempt = ({ answer, board }) => (
  <>
    {board.map((square, i) => {
      const color = square == answer[i] ? square : '';
      return <li className={`square ${color}`} />;
    })}
  </>
);

const Guess = ({ makeGuess }) => {
  const [guesses, setGuesses] = useState([
    {
      name: 'guess1',
      color: COLORS.RED,
    },
    {
      name: 'guess2',
      color: COLORS.BLUE,
    },
    {
      name: 'guess3',
      color: COLORS.GREEN,
    },
    {
      name: 'guess4',
      color: COLORS.YELLOW,
    },
  ]);

  const clickedGuess = (g) => {
    const newGuesses = guesses.map((guess) =>
      guess.name == g ? { ...guess, color: nextColor(guess.color) } : guess
    );
    setGuesses(newGuesses);
  };

  const handleSubmit = () => {
    const colors = guesses.reduce((acc, g) => [...acc, g.color], []);
    makeGuess(colors);
  };

  return (
    <>
      {guesses.map((guess) => (
        <button
          className={`square ${guess.color}`}
          onClick={() => clickedGuess(guess.name)}
        />
      ))}
      <button onClick={handleSubmit} className='make-guess'>
        Make Guess
      </button>
    </>
  );
};

const randomBoard = () => [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];

const randomInt = (max) => Math.floor(Math.random() * max);
const randomColor = () => {
  switch (randomInt(3)) {
    case 0:
      return COLORS.RED;
    case 1:
      return COLORS.BLUE;
    case 2:
      return COLORS.GREEN;
    case 3:
      return COLORS.YELLOW;
  }
};

const COLORS = {
  RED: 'red',
  BLUE: 'blue',
  GREEN: 'green',
  YELLOW: 'yellow',
};

const nextColor = (color) => {
  switch (color) {
    case COLORS.RED:
      return COLORS.BLUE;
    case COLORS.BLUE:
      return COLORS.GREEN;
    case COLORS.GREEN:
      return COLORS.YELLOW;
    case COLORS.YELLOW:
      return COLORS.RED;
  }
};

export default App;
