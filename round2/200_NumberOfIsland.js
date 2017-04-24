/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) return 0;
    let res = 0;
    function dfs(i, j) {
        if (i > -1 && i < grid.length && j > -1 && j < grid[0].length && grid[i][j] === "1") {
            grid[i][j] = "2";
            dfs(i+1, j);
            dfs(i-1, j);
            dfs(i, j+1);
            dfs(i, j-1);
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                res++;
                dfs(i, j);
            }
        }
    }
    return res;
};