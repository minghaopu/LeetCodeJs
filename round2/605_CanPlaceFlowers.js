/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.splice(0, 0, 0);
    flowerbed.push(0);
    for (let i = 1; i < flowerbed.length - 1; ++i) {
        if (flowerbed[i-1] + flowerbed[i] + flowerbed[i+1] === 0) {
            --n;
            ++i;
        }
    }
    return n <= 0;
};