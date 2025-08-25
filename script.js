function secondHighest(arr) {
  // Filter out only valid numbers
  arr = arr.filter(v => typeof v === "number" && !isNaN(v));

  if (arr.length < 2) return -1;

  let max = -Infinity;
  let second = -Infinity;

  for (let v of arr) {
    if (v > max) {
      second = max;
      max = v;
    } else if (v < max && v > second) {
      second = v;
    }
  }

  return second === -Infinity ? -1 : second;
}
