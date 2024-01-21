/* eslint-disable @typescript-eslint/indent -- disabled */
/* eslint-disable @typescript-eslint/no-explicit-any -- disabled */
import { GraphNodeType } from "./GraphNodeType";

/**
 * Represents a singular node in the state graph
 */
export class GraphNode<T = any> {
    /**
     * The parent of the GraphNode
     */
    public parent?: unknown;

    /**
     * The children of the node
     */
    public children: unknown[] = [];

    /**
     * The specification of the GraphNode
     */
    public specification: GraphNodeType;

    /**
     * The value of the GraphNode
     */
    public value: number;

    /**
     * Initializes the GraphNode with the proper initialization values
     *
     * @param value - The value to initialize the GraphNode with
     * @param specification - The specification of the GraphNode
     * @param children - The children of the GraphNode
     */
    public constructor(specification: GraphNodeType, value: number) {
        this.specification = specification;
        this.value = value;
    }

    public addChild = (newChild: GraphNode<T>): this => {
        this.children.push(newChild);
        return this;
    };

    public addChildren = (children: GraphNode<T>[]): this => {
        this.children = [...this.children, ...children];
        return this;
    };

    public getValue = (): number => {
        const childrenValues =
            this.specification === GraphNodeType.TERMINAL
                ? []
                : this.children.map((eachChild) =>
                      (eachChild as GraphNode<T>).getValue(),
                  );
        switch (this.specification) {
            case GraphNodeType.MIN: {
                return Math.min(...childrenValues);
            }
            case GraphNodeType.MAX: {
                return Math.max(...childrenValues);
            }
            case GraphNodeType.EXPECTIMAX: {
                return (
                    childrenValues.reduce(
                        (previous, current) => previous + current,
                        0,
                    ) / this.children.length
                );
            }
            default: {
                return this.value;
            }
        }
    };
}
