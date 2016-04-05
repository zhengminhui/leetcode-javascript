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
 * two rect area - overlap area.
 * overlap depends on relative position. Draw four pics. Becareful when there is no overlap, so need to compare with 0.
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var rectA = (C - A) * (D - B),
        rectB = (G - E) * (H - F),
        overlap = Math.max(0, Math.min(G, C) - Math.max(E, A)) * Math.max(0, Math.min(H, D) - Math.max(F, B));
    return rectA + rectB - overlap;

};