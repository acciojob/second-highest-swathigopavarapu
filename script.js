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
console.log(secondHighest([5, 3, 1, 4, 2]));       // 4
console.log(secondHighest([1, 1, 1]));             // -1
console.log(secondHighest([-1, -2, -3]));          // -2
console.log(secondHighest([10]));                  // -1
console.log(secondHighest([]));                    // -1
console.log(secondHighest([1, 2, 'a', 3, null]));  // 2
console.log(secondHighest([5, 5, 5, 5, 5]));       // -1
