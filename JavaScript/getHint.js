/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 * '1807','7810' -> 1A3B
 * '1123','0111' -> 1A1B
 * '0123','0111' -> 2A0B
 * '1122','1222' -> 3A0B
 * Use two arrays which fill by 0s to store the number that doesn't match. 
 * nums1 save screte number, nums2 save guess number. 
 * Then get the min of each index. if one of nums[i] is 0, that means the number doesn't show up or dosen't match. 
 * Otherwise nums[i] is the time of that number show up. So add to cow.
 */
var getHint = function(secret, guess) {
  if (secret.length === 0 || guess.length === 0) return '0A0B';
  var bull = 0,
    cow = 0,
    nums1 = Array(10).fill(0),
    nums2 = Array(10).fill(0);
  for (var i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bull++;
    } else {
      nums1[parseInt(secret[i])]++;
      nums2[parseInt(guess[i])]++;
    }
  }
  for (i = 0; i < nums1.length; i++) {
    cow += Math.min(nums1[i], nums2[i]);
  }
  return bull + 'A' + cow + 'B';
};

console.log(getHint('0123', '0111'))
