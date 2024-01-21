/**
 * Represents a singular piece on the board
 */
export class BoardPiece<T = unknown> {
    public piece?: T;

    public x: number;

    public y: number;

    /**
     *
     * @param piece
     * @param x
     * @param y
     */
    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public placePiece = (piece: T, x: number, y: number): void => {
        this.piece = piece;
        this.x = x;
        this.y = y;
    };
}
