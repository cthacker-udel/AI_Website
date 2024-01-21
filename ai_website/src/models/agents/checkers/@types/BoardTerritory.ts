import type { CheckersPiece } from "../classes/CheckersPiece";
import type { Board } from "./Board";

export type BoardTerritory = {
    colEnd: number;
    colStart: number;
    rowEnd: number;
    rowStart: number;
    territory: Board<CheckersPiece>;
};
