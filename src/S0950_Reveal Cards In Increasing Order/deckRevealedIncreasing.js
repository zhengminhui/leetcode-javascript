/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const sort = deck.sort((a, b) => a - b);
  const queue = [];
  for (let i = sort.length - 1; i >= 0; i--) {
    if (queue.length) {
      queue.push(queue.shift());
    }
    queue.push(sort[i]);
  }
  return queue.reverse();
};
