import type { BoardPiece } from "../classes/BoardPiece";

export type Board<T = unknown> = BoardPiece<T>[][];
