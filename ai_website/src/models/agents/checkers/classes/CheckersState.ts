import type { Board } from "../@types/Board";
import { CheckersPlayer } from "../enums/CheckersPlayer";
import { generateCheckersBoard } from "../helpers/generateCheckersBoard";
import { generateRandomTurn } from "../helpers/generateRandomTurn";
import type { BoardInfo } from "./BoardInfo";
import type { CheckersMove } from "./CheckersMove";
import type { CheckersPiece } from "./CheckersPiece";

/**
 *
 */
export class CheckersState {
    public turn: CheckersPlayer = CheckersPlayer.BOTTOM;

    public board: Board<CheckersPiece> = [];

    public readonly info: BoardInfo;

    public value = 0;

    public moves: CheckersMove[] = [];

    public explored = false;

    public parent?: unknown;

    public depth = 1;

    public appliedMoveStr = "";

    public appliedMove?: CheckersMove;

    /**
     *
     * @param rows
     * @param cols
     * @param currentTurn
     * @param currentBoard
     */
    public constructor(
        info: BoardInfo,
        currentTurn?: CheckersPlayer,
        currentBoard?: Board<CheckersPiece>,
    ) {
        this.info = info;
        this.turn = currentTurn ?? generateRandomTurn();
        this.board =
            currentBoard ?? generateCheckersBoard(info.rows, info.cols);

        this.info.setBoard(currentBoard);
    }
}
