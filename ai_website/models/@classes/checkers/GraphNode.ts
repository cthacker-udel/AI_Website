import { GraphNodeType } from "../../enums/checkers";

/**
 * Represents a singular node in the state graph
 */
export class GraphNode {
  /**
   * The parent of the GraphNode
   */
  public parent?: GraphNode;

  /**
   * Initializes the GraphNode with the proper initialization values
   *
   * @param value - The value to initialize the GraphNode with
   * @param specification - The specification of the GraphNode
   * @param children - The children of the GraphNode
   */
  constructor(
    public value: number,
    public specification: GraphNodeType,
    public children: GraphNode[]
  ) {}
}
