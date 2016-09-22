/**
 * 299. Bulls and Cows
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var length = secret.length;
    var A = 0;
    var B = 0;
    var na = [0,0,0,0,0,0,0,0,0,0];
    var nb = [0,0,0,0,0,0,0,0,0,0];

    for (var index = 0; index < length; index++) {
    	var n1 = parseInt(secret[index]);
    	var n2 = parseInt(guess[index]);
    	if (n1 == n2) {
    		A++;
    	}else {
    		na[n1] = na[n1]+1;
            nb[n2] = nb[n2]+1;
    	}
    }
    for (index = 0; index < 10; index++) {
    	B += Math.min(na[index],nb[index]);
    }
	return A+"A"+B+"B";
};

