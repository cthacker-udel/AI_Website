import { CheckersPlayer } from "../enums/CheckersPlayer";

/**
 * Generates a random turn for the game
 *
 * @returns A randomized turn
 */
export const generateRandomTurn = (): CheckersPlayer => {
    const turns = [CheckersPlayer.BOTTOM, CheckersPlayer.TOP];
    return turns[Math.floor(Math.random() * 2)];
};
