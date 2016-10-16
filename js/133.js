/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = [];
}
var cloneGraph = function(graph) {
    var hash = {};
    var clone = function(graph) {
        if (graph === null) return graph;
        if (hash[graph.label] === undefined) {
            hash[graph.label] = new UndirectedGraphNode(graph.label);
            for (var i = 0; i < graph.neighbors.length; i++) {
                hash[graph.label].neighbors.push(clone(graph.neighbors[i]));
            }
        }
        return hash[graph.label];
    };
    var g = clone(graph);
    return g;
};
