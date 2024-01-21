/* eslint-disable @typescript-eslint/indent -- disabled */
/* eslint-disable no-confusing-arrow -- disabled */

import type { Board } from "../@types/Board";
import { BoardTerritory } from "../@types/BoardTerritory";
import type { CheckersPiece } from "../classes/CheckersPiece";
import { CheckersPlayer } from "../enums/CheckersPlayer";

/**
 *
 * @param board
 * @param currentTurn
 * @returns
 */
const getRowMeasurement = (
    board: Board<CheckersPiece>,
    currentTurn: CheckersPlayer,
    isEnd = false,
): number => {
    const isTop = currentTurn === CheckersPlayer.TOP;
    const iterableBoard = isTop ? board : board.toReversed();
    for (const eachRow of iterableBoard) {
        for (const [index, eachPiece] of eachRow.entries()) {
            if (
                eachPiece.piece !== undefined &&
                eachPiece.piece.owner === currentTurn
            ) {
                return isTop
                    ? isEnd
                        ? board.length - index
                        : index
                    : isEnd
                      ? index
                      : board.length - index;
            }
        }
    }
    return -1;
};

const getColMeasurement = (
    board: Board<CheckersPiece>,
    currentTurn: CheckersPlayer,
) => {};

/**
 * Given the board and the current player, returns the enemy territory
 *
 * @param board - The current board
 * @param currentTurn - The current player
 * @returns The enemy territory of the board
 */
export const getTerritory = (
    board: Board<CheckersPiece>,
    currentTurn: CheckersPlayer,
    enemy = false,
): BoardTerritory => {
    let rowStart = getRowMeasurement(board, currentTurn);
    let rowEnd = getRowMeasurement(board, currentTurn, true);
};
