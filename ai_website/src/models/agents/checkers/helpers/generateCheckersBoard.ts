import type { Board } from "../@types/Board";
import { BoardPiece } from "../classes/BoardPiece";
import type { CheckersPiece } from "../classes/CheckersPiece";

/**
 *
 * @param rows
 * @param cols
 */
export const generateCheckersBoard = (
    rows: number,
    cols: number,
): Board<CheckersPiece> => {
    const board: Board<CheckersPiece> = [];
    for (let eachRow = 0; eachRow < rows; eachRow += 1) {
        const subRow = [];
        for (let eachColumn = 0; eachColumn < cols; eachColumn += 1) {
            subRow.push(new BoardPiece<CheckersPiece>(eachColumn, eachRow));
        }
        board.push([...subRow]);
    }
    return board;
};
