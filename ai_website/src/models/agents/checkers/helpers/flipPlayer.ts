/* eslint-disable no-confusing-arrow -- disabled */
import { CheckersPlayer } from "../enums/CheckersPlayer";

/**
 * Flips the current player passed into the function
 *
 * @param currentPlayer - The current player being flipped
 * @returns The flipped player
 */
export const flipPlayer = (currentPlayer: CheckersPlayer): CheckersPlayer =>
    currentPlayer === CheckersPlayer.TOP
        ? CheckersPlayer.BOTTOM
        : CheckersPlayer.TOP;
