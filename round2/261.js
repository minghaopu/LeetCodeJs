/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    let parent = Array(n).fill(0).map((item, idx) => idx);

    const find = (node) => {
        if (parent[node] == node) return node;
        return find(parent[node]);
    }
    
    for (let e of edges) {
        let n1 = find(e[0]);
        let n2 = find(e[1]);
        if (n1 === n2) return false;
        parent[n1] = n2;
    }
    
    return edges.length === n - 1;
};