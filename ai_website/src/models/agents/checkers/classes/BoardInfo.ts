import type { Board } from "../@types/Board";
import type { BoardTerritory } from "../@types/BoardTerritory";
import { CheckersPlayer } from "../enums/CheckersPlayer";
import { getTerritory } from "../helpers/getTerritory";
import type { CheckersPiece } from "./CheckersPiece";

/**
 *
 */
export class BoardInfo {
    public minY = 0;

    public maxY: number;

    public minX = 0;

    public maxX: number;

    public yCenter: number;

    public xCenter: number;

    public board?: Board<CheckersPiece>;

    public territoryInfo?: BoardTerritory;

    public turn: CheckersPlayer = CheckersPlayer.BOTTOM;

    /**
     *
     * @param rows
     * @param cols
     */
    public constructor(rows: number, cols: number) {
        this.maxY = rows;
        this.maxX = cols;
        this.yCenter = this.maxY / 2;
        this.xCenter = this.maxX / 2;
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
            this.territoryInfo = getTerritory(this.board, this.turn);
        }
    };
}
