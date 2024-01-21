import { GraphNodeType } from "../agents/checkers/enums";

export const flipSpecification = (
  specification: GraphNodeType
): GraphNodeType => {
  switch (specification) {
    case GraphNodeType.EXPECTIMAX:
    case GraphNodeType.MAX: {
      return GraphNodeType.MIN;
    }
    case GraphNodeType.MIN: {
      return GraphNodeType.MAX;
    }
    default: {
      return GraphNodeType.TERMINAL;
    }
  }
};
