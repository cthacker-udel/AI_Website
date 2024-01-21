import { GraphNodeType } from "../../agents/checkers/enums";

/**
 * Represents a singular node in the state graph
 */
export class GraphNode<T = any> {
  /**
   * The parent of the GraphNode
   */
  public parent?: GraphNode<T>;

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
    public children: GraphNode<T>[]
  ) {}

  public addChild = (newChild: GraphNode<T>): GraphNode<T> => {
    this.children.push(newChild);
    return this;
  };

  public addChildren = (children: GraphNode<T>[]): GraphNode<T> => {
    this.children = [...this.children].concat(children);
    return this;
  };

  public getValue = (): number => {
    const childrenValues =
      this.specification === GraphNodeType.TERMINAL
        ? []
        : this.children.map((eachChild) => eachChild.getValue());
    switch (this.specification) {
      case GraphNodeType.MIN: {
        return Math.min(...childrenValues);
      }
      case GraphNodeType.MAX: {
        return Math.max(...childrenValues);
      }
      case GraphNodeType.EXPECTIMAX: {
        return (
          childrenValues.reduce((prev, curr) => prev + curr, 0) /
          this.children.length
        );
      }
      default: {
        return this.value;
      }
    }
  };
}
