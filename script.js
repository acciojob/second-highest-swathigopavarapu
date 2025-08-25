function secondHighest(arr) {
  let max = -Infinity;
  let second = -Infinity;

  for (const v of arr) {
    if (typeof v !== "number" || !Number.isFinite(v)) continue; // ignore non-numerics, NaN, ±Infinity

    if (v > max) {
      second = max;
      max = v;
    } else if (v < max && v > second) {
      second = v;
    }
  }
  return second === -Infinity ? -1 : second;
}
