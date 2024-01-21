import { GraphNodeType } from "../../enums/checkers";

/**
 * Represents a singular state node
 */
export type GraphNode = {
  /**
   * The children of the node
   */
  children: GraphNode[];
  /**
   * The parent of the node
   */
  parent?: GraphNode;
  /**
   * The specification of the node
   */
  specification: GraphNodeType;
  /**
   * The value of the node (it's heuristic)
   */
  value: number;
};
