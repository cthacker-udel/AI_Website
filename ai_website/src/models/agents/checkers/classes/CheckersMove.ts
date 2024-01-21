/**
 *
 */
export class CheckersMove {
    public readonly fromX: number;

    public readonly fromY: number;

    public readonly toX: number;

    public readonly toY: number;

    public readonly capture: boolean;

    /**
     *
     * @param fromX
     * @param fromY
     * @param toX
     * @param toY
     * @param capture
     */
    public constructor(
        fromX: number,
        fromY: number,
        toX: number,
        toY: number,
        capture: boolean,
    ) {
        this.fromX = fromX;
        this.fromY = fromY;
        this.toX = toX;
        this.toY = toY;
        this.capture = capture;
    }

    /**
     *
     * @returns
     */
    public toString = (): string =>
        `From (${this.fromX}, ${this.fromY}) to (${this.toX}, ${this.toY})`;
}
