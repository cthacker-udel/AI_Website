/* eslint-disable no-confusing-arrow -- disabled */

import { CaptureCoordinate } from "../@types/CaptureCoordinate";
import { Coordinate } from "../@types/Coordinate";
import { DiagonalCoordinate } from "../@types/DiagonalCoordinate";
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

    public diagonal: DiagonalCoordinate;

    public capture: DiagonalCoordinate;

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
        info: BoardInfo,
    ) {
        super(x, y);
        this.owner = owner;
        this.info = info;
        const { capture, diagonal } = calculateMoves;
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
        let heuristic = this.isKing ? 2 : 1;
        if (this.info.territoryInfo !== undefined) {
            const {
                enemyColEnd,
                enemyColStart,
                enemyRowEnd,
                enemyRowStart,
                enemyTerritoryPieceIds,
            } = this.info.territoryInfo;

            // If the piece is king, and is in enemy territory, how close is the piece to the center of enemy territory
            if (enemyTerritoryPieceIds.has(this.id) && this.isKing) {
                const middleY = (enemyRowEnd + enemyRowStart) / 2;
                const middleX = (enemyColEnd + enemyColStart) / 2;
                heuristic += Math.abs(
                    Math.abs(this.y - middleY) +
                        Math.abs(this.x - middleX) -
                        10,
                );
            }

            // If the piece is not king, how far is it from the king row (last row of either side)
            if (!this.isKing && enemyTerritoryPieceIds.has(this.id)) {
                heuristic += Math.abs(
                    this.y -
                        (this.owner === CheckersPlayer.TOP
                            ? 0
                            : this.info.maxY - 1),
                );
            }
        }

        heuristic +=
            Math.abs(this.y - this.info.yCenter) +
            Math.abs(this.x - this.info.xCenter);

        if (!this.isKing) {
            heuristic += Math.abs(
                this.y -
                    (this.owner === CheckersPlayer.TOP
                        ? 0
                        : this.info.maxY - 1),
            );
        }

        return heuristic;
    };
}
