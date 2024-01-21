/**
 * Represents which type of Graph Node is present in the state tree
 */
export enum GraphNodeType {
  /**
   * Minimizer Agent
   */
  MIN = 0,
  /**
   * Maximizer Agent
   */
  MAX = 1,
  /**
   * Expectimax Agent
   */
  EXPECTIMAX = 2,
  /**
   * Terminal Agent
   */
  TERMINAL = 4,
}
