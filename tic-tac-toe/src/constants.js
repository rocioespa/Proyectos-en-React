export const TURNS = {
    X: "x",
    O: "o",
  };
  
  //const board = Array(9).fill(null); //Array de 9 posiciones rellenado con null
  
export const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];