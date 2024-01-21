/* eslint-disable no-confusing-arrow -- disabled */

import { CheckersPlayer } from "../enums/CheckersPlayer";
import type { BoardInfo } from "./BoardInfo";
import { BoardPiece } from "./BoardPiece";

/**
 *
 */
export class CheckersPiece extends BoardPiece {
    public owner: CheckersPlayer;

    public isKing = false;

    public value = 0;

    public info: BoardInfo;

    /**
     *
     * @param owner
     * @param x
     * @param y
     */
    public constructor(
        x: number,
        y: number,
        owner: CheckersPlayer,
        stats: BoardInfo,
    ) {
        super(x, y);
        this.owner = owner;
        this.info = stats;
    }

    /**
     * Returns a "stringified" version of the current owner of the piece
     *
     * @returns
     */
    public stringifyOwner = (): string =>
        this.owner === CheckersPlayer.BOTTOM ? "B" : "T";

    /**
     * Returns the heuristic value of the piece
     */
    public heuristicValue = (): number => {
        // If the piece is king, has a initial value of 2, if not, 1
        const baseValue = this.isKing ? 2 : 1;
    };
}
