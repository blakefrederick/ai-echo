import React from 'react';

const confettiColors = ['#f00', '#0f0', '#00f', '#ff0'];

const getRandomColor = () => confettiColors[Math.floor(Math.random() * confettiColors.length)];

const Square = ({ onClick, color }) => (
  <div
    onClick={onClick}
    style={{
      width: 100,
      height: 100,
      backgroundColor: color,
      boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
    }}
  />
);

const Game = () => {
  const [sequence, setSequence] = React.useState(
    Array(4)
      .fill(null)
      .map(() => getRandomColor())
  );
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [clickedColor, setClickedColor] = React.useState(null);
  const [pulse, setPulse] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);

  React.useEffect(() => {
    if (pulse) {
      const timeout = setTimeout(() => {
        setPulse(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [pulse]);

  const onSquareClick = color => {
    setClickedColor(color);
    if (color === sequence[currentIndex]) {
      if (currentIndex === sequence.length - 1) {
        // They completed the sequence! Turn the square green.
        setClickedColor(null);
        setCurrentIndex(0);
        setIsCorrect(true);
        setSequence(
          Array(4)
            .fill(null)
            .map(() => getRandomColor())
        );
        return;
      }
      setCurrentIndex(currentIndex + 1);
    } else {
      // They clicked the wrong square. Pulse all squares red.
      setClickedColor(null);
      setCurrentIndex(0);
      setSequence(
        Array(4)
          .fill(null)
          .map(() => getRandomColor())
      );
      setPulse(true);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 400,
        border: '4px solid #ccc',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
          }}
        >
          <Square
            color={
              currentIndex === 0
                ? pulse
                  ? '#f00'
                  : clickedColor === sequence[0]
                  ? isCorrect
                    ? '#0f0'
                    : '#fff'
                  : '#fff'
                : '#fff'
            }
            onClick={() => onSquareClick(sequence[0])}
          />
          <Square
            color={
              currentIndex === 0
                ? pulse
                  ? '#f00'
                  : clickedColor === sequence[0]
                  ? isCorrect
                    ? '#0f0'
                    : '#fff'
                  : '#fff'
                : '#fff'
            }     
            onClick={() => onSquareClick(sequence[1])}
          />
        </div>
        <div
          style={{
            display: 'flex',
          }}
        >
          <Square
            color={
              currentIndex === 0
                ? pulse
                  ? '#f00'
                  : clickedColor === sequence[0]
                  ? isCorrect
                    ? '#0f0'
                    : '#fff'
                  : '#fff'
                : '#fff'
            }
            onClick={() => onSquareClick(sequence[2])}
          />
          <Square
            color={
              currentIndex === 0
                ? pulse
                  ? '#f00'
                  : clickedColor === sequence[0]
                  ? isCorrect
                    ? '#0f0'
                    : '#fff'
                  : '#fff'
                : '#fff'
            }
            onClick={() => onSquareClick(sequence[3])}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
