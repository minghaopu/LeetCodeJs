/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let res = [];
    if (prerequisites.length === 0) {
        for (let i = 0; i < numCourses; i++) res[i] = i;
        return res;
    }
    let graph = [];
    for (let p of prerequisites) {
        let pre = p[1], cos = p[0];
        if (!graph[cos]) graph[cos] = new Set();
        graph[cos].add(pre);
    }
    
    let visited = [], path = [];
    path.length = visited.length = numCourses;
    path.fill(0);
    visited.fill(0);
    
    function dfs (node) {
        if (visited[node]) return false;
        visited[node] = 1;
        if (graph[node]) {
            path[node] = 1;
            for (let neighbor of graph[node]) {
                if (path[neighbor] || dfs(neighbor)) return true;
            }
            path[node] = 0;
        }
        res.push(node);
        return false;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!visited[i] && dfs(i)) return []; // has circle;
    }
    return res;
};