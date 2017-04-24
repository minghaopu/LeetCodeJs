/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    if (tickets.length === 0 || tickets[0].length === 0) return [];
    let map = {};
    for (let ticket of tickets) {
        let dep = ticket[0], arr = ticket[1];
        if (map[dep] === undefined) {
            map[dep] = [];
        }
        map[dep].push(arr);
    }
    for (let key in map) {
        if (map.hasOwnProperty(key)) {
            map[key].sort();
        }
    }
    let path = [];
    (function dfs(start) {
        console.log(start);
        if (map[start] !== undefined) {
            while (map[start].length) {
                let next = map[start].shift();
                dfs(next);
            }
        }
        path.splice(0, 0, start);
    })("JFK");
    return path;
};