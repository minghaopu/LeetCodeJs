/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) return false;
    if (desiredTotal <= 0) return true;
    const format = (used) => {
        let num = 0;
        for (let b of used) {
            num <<= 1;
            if (b) num |= 1;
        }
        return num;
    }
    const helper = (total) => {
        if (total <= 0) return false;
        let key = format(used);
        if (!cache.has(key)) {
            for (let i = 1; i < used.length; i++) {
                if (!used[i]) {
                    used[i] = true;
                    if (!helper(total - i)) {
                        cache.set(key, true);
                        used[i] = false;
                        return true;
                    }
                    used[i] = false;
                }
            }
            cache.set(key, false);
        }
        return cache.get(key);
    }
    let cache = new Map();
    let used = new Array(maxChoosableInteger+1);
    used.fill(0);
    return helper(desiredTotal);
};