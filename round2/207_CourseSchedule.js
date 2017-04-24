/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if (prerequisites.length === 0) return true;
    let graph = [];
    for (let p of prerequisites) {
        let pre = p[1], cos = p[0];
        if (graph[cos] === undefined) graph[cos] = new Set();
        graph[cos].add(pre);
    }
    let visited = [], path = [];
    path.length = visited.length = numCourses;
    visited.fill(0);
    path.fill(0);
    
    function hasCircle(node) {
        if (visited[node]) return false;
        visited[node] = 1;
        if (!graph[node]) return false;
        path[node] = 1;
        for (let neighbor of graph[node]) {
            if (path[neighbor] || hasCircle(neighbor)) return true;
        }
        path[node] = 0;
        return false;
    }
    
    
    for (let i = 0; i < numCourses; i++) {
        if (!visited[i] && hasCircle(i)) return false;
    }
    return true;
};