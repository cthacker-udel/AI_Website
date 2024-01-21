import { GraphNode } from "@/models/adversarial/GraphNode";
import type { GraphNodeType } from "@/models/adversarial/GraphNodeType";
import { flipSpecification } from "@/models/helpers";

/**
 * Represents a graph node in the specific checkers game
 */
export class CheckersGraphNode extends GraphNode {
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
        children: GraphNode<CheckersGraphNode>[] = [],
        flipSpec = false,
        isWinningMove = false,
    ) {
        super(value, specification, children);
        this.specification = flipSpec
            ? flipSpecification(this.specification)
            : this.specification;
        this.isWinningMove = isWinningMove;
    }
}
