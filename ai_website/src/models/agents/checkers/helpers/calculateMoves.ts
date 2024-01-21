import { CalculatedCoordinates } from "../@types/CalculatedCoordinates";
import { Coordinate } from "../@types/Coordinate";
import { DiagonalCoordinate } from "../@types/DiagonalCoordinate";
import { BoardInfo } from "../classes/BoardInfo";

/**
 *
 * @param x
 * @param y
 * @param maxX
 * @param maxY
 * @returns
 */
const isInBounds = (coord: Coordinate, info: BoardInfo): boolean => {
    const { maxX, maxY } = info;
    const { x, y } = coord;
    const boundX = maxX - 1;
    const boundY = maxY - 1;
    return x >= 0 && x <= boundX && y >= 0 && y <= boundY;
};

/**
 *
 * @param x
 * @param y
 * @param info
 */
export const calculateMoves = (
    x: number,
    y: number,
    info: BoardInfo,
): CalculatedCoordinates => {
    const rightX = x + 1;
    const leftX = x - 1;
    const upY = y + 1;
    const downY = y - 1;

    const captureRightX = x + 2;
    const captureLeftX = x - 2;
    const captureUpY = y + 2;
    const captureDownY = y - 2;

    const diagonalUpRight: Coordinate = { x: rightX, y: upY };
    const diagonalUpLeft: Coordinate = { x: leftX, y: upY };
    const diagonalDownRight: Coordinate = { x: rightX, y: downY };
    const diagonalDownLeft: Coordinate = { x: leftX, y: downY };

    const captureUpRight: Coordinate = { x: captureRightX, y: captureUpY };
    const captureUpLeft: Coordinate = { x: captureLeftX, y: captureUpY };
    const captureDownRight: Coordinate = { x: captureRightX, y: captureDownY };
    const captureDownLeft: Coordinate = { x: captureLeftX, y: captureDownY };

    const diagonal: DiagonalCoordinate = {};

    diagonal.upRight = isInBounds(diagonalUpRight, info)
        ? diagonalUpRight
        : undefined;
    diagonal.upLeft = isInBounds(diagonalUpLeft, info)
        ? diagonalUpLeft
        : undefined;
    diagonal.downRight = isInBounds(diagonalDownRight, info)
        ? diagonalDownRight
        : undefined;
    diagonal.downLeft = isInBounds(diagonalDownLeft, info)
        ? diagonalDownLeft
        : undefined;

    const capture: DiagonalCoordinate = {};

    capture.upRight = isInBounds(captureUpRight, info)
        ? captureUpRight
        : undefined;
    capture.upLeft = isInBounds(captureUpLeft, info)
        ? captureUpLeft
        : undefined;
    capture.downRight = isInBounds(captureDownRight, info)
        ? captureDownRight
        : undefined;
    capture.downLeft = isInBounds(captureDownLeft, info)
        ? captureDownLeft
        : undefined;

    return { capture, diagonal };
};
