import { GraphNode } from "@/models/adversarial/GraphNode";
import type { GraphNodeType } from "@/models/adversarial/GraphNodeType";

import type { CheckersState } from "./CheckersState";

/**
 * Represents a graph node in the specific checkers game
 */
export class CheckersGraphNode extends GraphNode {
    /**
     * Represents a state of the checkers game
     */
    public state: CheckersState;

    public isWinningMove = false;

    /**
     * Represents a "snapshot" of the state
     *
     * @param value - The value of the node
     * @param specification - The specification of the node (maximizer, minimizer, etc)
     * @param children - The children of the node
     * @param flipSpec - Whether to flip the node specification
     * @param isWinningMove - Whether the current node represents a winning move
     */
    public constructor(
        value: number,
        specification: GraphNodeType,
        state: CheckersState,
    ) {
        super(value, specification);
        this.state = state;
    }
}
