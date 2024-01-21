/* eslint-disable no-confusing-arrow -- disabled */
/* eslint-disable @typescript-eslint/indent -- disabled */

import type { Board } from "../@types/Board";
import type { BoardTerritory } from "../@types/BoardTerritory";
import type { CheckersPiece } from "../classes/CheckersPiece";
import { CheckersPlayer } from "../enums/CheckersPlayer";
import { flipPlayer } from "./flipPlayer";

type MeasurementInfo = {
    end: number;
    start: number;
};

/**
 *
 * @param board
 * @param currentTurn
 * @returns
 */
const getRowMeasurement = (
    board: Board<CheckersPiece>,
    currentTurn: CheckersPlayer,
): MeasurementInfo => {
    const isTop = currentTurn === CheckersPlayer.TOP;
    const iterableBoard = isTop ? board : board.toReversed();
    for (const eachRow of iterableBoard) {
        for (const [index, eachPiece] of eachRow.entries()) {
            if (
                eachPiece.piece !== undefined &&
                eachPiece.piece.owner === currentTurn
            ) {
                return isTop
                    ? { end: board.length - index, start: index }
                    : { end: index, start: board.length - index };
            }
        }
    }
    return {} as MeasurementInfo;
};

/**
 *
 * @param board
 * @param currentTurn
 * @param end
 * @returns
 */
const getColMeasurement = (
    board: Board<CheckersPiece>,
    currentTurn: CheckersPlayer,
): MeasurementInfo => {
    let colStart = board[0].length - 1;
    let colEnd = 0;
    for (const eachRow of board) {
        for (const [index, eachPiece] of eachRow.entries()) {
            if (
                eachPiece.piece !== undefined &&
                eachPiece.piece.owner === currentTurn
            ) {
                colStart = Math.min(index, colStart);
                colEnd = Math.max(index, colEnd);
            }
        }
    }
    return { end: colEnd, start: colStart };
};

/**
 * Given the board and the current player, returns the enemy territory
 *
 * @param board - The current board
 * @param currentTurn - The current player
 * @returns The information on the territories
 */
export const getTerritory = (
    board: Board<CheckersPiece>,
    currentTurn: CheckersPlayer,
): BoardTerritory => {
    const { start: rowStart, end: rowEnd } = getRowMeasurement(
        board,
        currentTurn,
    );
    const { start: colStart, end: colEnd } = getColMeasurement(
        board,
        currentTurn,
    );

    const flippedPlayer = flipPlayer(currentTurn);

    const { end: enemyRowEnd, start: enemyRowStart } = getRowMeasurement(
        board,
        flippedPlayer,
    );
    const { end: enemyColEnd, start: enemyColStart } = getColMeasurement(
        board,
        flippedPlayer,
    );

    const enemyTerritory = board
        .slice(enemyRowStart, enemyRowEnd + 1)
        .map((eachRow) => eachRow.slice(enemyColStart, enemyColEnd + 1));

    const enemyTerritoryPieceIds = new Set<number>(
        enemyTerritory
            .map((eachRow) =>
                eachRow.map((eachPiece) =>
                    eachPiece.piece === undefined ||
                    eachPiece.piece.owner === currentTurn
                        ? -1
                        : eachPiece.id,
                ),
            )
            .flat(2)
            .filter((eachId) => eachId !== -1),
    );

    const ownedTerritory = board
        .slice(rowStart, rowEnd + 1)
        .map((eachRow) => eachRow.slice(colStart, colEnd));

    const ownedTerritoryPieceIds = new Set<number>(
        ownedTerritory
            .map((eachRow) =>
                eachRow.map((eachPiece) =>
                    eachPiece.piece === undefined ||
                    eachPiece.piece.owner !== currentTurn
                        ? -1
                        : eachPiece.id,
                ),
            )
            .flat(2)
            .filter((eachId) => eachId !== -1),
    );

    return {
        colEnd,
        colStart,
        enemyColEnd,
        enemyColStart,
        enemyRowEnd,
        enemyRowStart,
        enemyTerritory,
        enemyTerritoryPieceIds,
        ownedTerritory,
        ownedTerritoryPieceIds,
        rowEnd,
        rowStart,
    };
};
