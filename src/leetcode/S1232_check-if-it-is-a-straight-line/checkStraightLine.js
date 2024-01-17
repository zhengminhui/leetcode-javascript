/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (!coordinates.length || coordinates.length <= 2) return true;
  const slope = getSlope(coordinates[0], coordinates[1]);

  for (let i = 1; i < coordinates.length - 1; i++) {
    const pre = coordinates[i];
    const lat = coordinates[i + 1];
    const s = getSlope(pre, lat);
    if (s !== slope) return false;
  }
  return true;
};

const getSlope = (point1, point2) => {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  if (x1 === x2) return Infinity;
  if (y1 === y2) return 0;
  const k = (y2 - y1) / (x2 - x1);
  return k;
};
