function secondHighest(arr) {
  if (!arr || arr.length < 2) return -Infinity;

  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num < max && num > second) {
      second = num;
    }
  }

  return second === -Infinity ? -Infinity : second;
}
