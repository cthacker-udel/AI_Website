import type { Board } from "../@types/Board";
import { CheckersPlayer } from "../enums/CheckersPlayer";
import { getTerritory } from "../helpers/getTerritory";
import type { CheckersPiece } from "./CheckersPiece";

/**
 *
 */
export class BoardInfo {
    public rows: number;

    public cols: number;

    public board?: Board<CheckersPiece>;

    public turn: CheckersPlayer = CheckersPlayer.BOTTOM;

    public enemyTerritory?: Board<CheckersPiece>;

    public friendlyTerritory?: Board<CheckersPiece>;

    /**
     *
     * @param rows
     * @param cols
     */
    public constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
    }

    /**
     *
     * @param board
     */
    public setBoard = (board?: Board<CheckersPiece>): void => {
        this.board = board ?? [];
    };

    public setTurn = (turn: CheckersPlayer): void => {
        this.turn = turn;
        if (this.board !== undefined) {
            this.enemyTerritory = getTerritory(this.board, this.turn, true);
            this.friendlyTerritory = getTerritory(this.board, this.turn);
        }
    };
}
