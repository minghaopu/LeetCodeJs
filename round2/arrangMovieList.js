/**
 * @param {movies[][]} movies
 * @return {sorted schedule[]}
 */
var arrangeMovie = function(movies) {
    if (movies.length === 0) return [];
    let cache = {};
    let visitedTime = new Set();
    for (let i = 0; i < movies.length; i++) {
    	for (let time of movies[i]) {
    		if (cache[time] === undefined) cache[time] = [];
    		cache[time].push(i);
    	}
    }
    let schedule = [];
    let visitedMovie = [];
    visitedMovie.length = movies.length;
    visitedMovie.fill(0);
    (function helper(count) {
    	if (count === movies.length) return true;
    	for (let time in cache) {
    		if (cache.hasOwnProperty(time)) {
    			if (!visitedTime.has(time)) {
    				visitedTime.add(time);
    				for (let movie of cache[time]) {
    					if (visitedMovie[movie] === 0) {
    						visitedMovie[movie] = 1;
    						schedule.push({
    							"movie": movie,
    							"time": time
    						});
    						if (helper(count+1)) return true;
    						schedule.pop();
    						visitedMovie[movie] = 0;
    					}
    				}
    				visitedTime.delete(time);
    			}
    		}
    	}
    	return false;
    })(0);
    return schedule;
};
let movies = [[14,15,16,17], [14,15,16], [14, 15], [14, 15, 17]];
console.log(arrangeMovie(movies));