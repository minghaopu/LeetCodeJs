/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    if (C <= E || A >= G || B >= H || D <= F) var rep = 0;
    else var rep = (Math.min(C, G) - Math.max(A, E)) * (Math.min(D, H) - Math.max(B, F));
    return (C - A) * (D - B) + (G - E) * (H - F) - rep;
};