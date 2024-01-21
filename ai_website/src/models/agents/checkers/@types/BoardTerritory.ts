import type { CheckersPiece } from "../classes/CheckersPiece";
import type { Board } from "./Board";

export type BoardTerritory = {
    colEnd: number;

    colStart: number;

    enemyColEnd: number;

    enemyColStart: number;

    enemyRowEnd: number;

    enemyRowStart: number;

    enemyTerritory: Board<CheckersPiece>;

    enemyTerritoryPieceIds: Set<number>;

    ownedTerritory: Board<CheckersPiece>;

    ownedTerritoryPieceIds: Set<number>;

    rowEnd: number;

    rowStart: number;
};
