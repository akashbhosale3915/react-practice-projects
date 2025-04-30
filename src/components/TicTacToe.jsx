import { useState } from "react";

const TicTacToe = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoxes) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;

      if (
        newBoxes[a] &&
        newBoxes[a] === newBoxes[b] &&
        newBoxes[a] === newBoxes[c]
      ) {
        setWinner(`Winner is ${newBoxes[a]}`);
        return;
      }

      if (!newBoxes.includes("") && !winner) {
        setWinner("Its a Draw");
      }
    }
  };

  const markPlayer = (index) => {
    if (boxes[index] || winner) return;
    const newBoxes = [...boxes];
    newBoxes[index] = currentPlayer;
    setBoxes(newBoxes);
    checkWinner(newBoxes);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen">
      <div className="grid grid-cols-3 w-[300px] gap-2">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="h-24 w-24 border rounded-md flex items-center justify-center cursor-pointer"
            onClick={() => markPlayer(index)}
          >
            {box}
          </div>
        ))}
      </div>
      <div className="">{winner}</div>
    </div>
  );
};

export default TicTacToe;
