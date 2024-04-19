import { WINNER_COMBOS } from "../constants"
export const checkWinnerFrom = (boardToCheck) => {
    // Revisamos las combinaciones ganadoras
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(
        boardToCheck[a] && // 0-> x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null
  }

export const checkEndGame = (newBoard) => {
    // Revisar si hay empate
    // si no hay mas espacios vacios en el tablero
    return newBoard.every((square) => square !== null)
  }
