function secondHighest(arr) {
  if (!arr || arr.length < 2) return -Infinity;

  // Remove duplicates
  let uniqueArr = [...new Set(arr)];

  if (uniqueArr.length < 2) return -Infinity;

  let max = -Infinity;
  let second = -Infinity;

  for (let num of uniqueArr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num < max) {
      second = num;
    }
  }

  return second;
}
