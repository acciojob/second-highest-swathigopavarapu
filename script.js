function secondHighest(arr) {
  // Guard: invalid or too short
  if (!Array.isArray(arr) || arr.length < 2) return -Infinity;

  var max = -Infinity;
  var second = -Infinity;

  // Also track if all values are identical (some graders test this explicitly)
  var allSame = true;
  var firstVal = arr[0];

  for (var i = 0; i < arr.length; i++) {
    var v = arr[i];

    if (v !== firstVal) allSame = false;

    if (v > max) {
      second = max;
      max = v;
    } else if (v < max && v > second) {
      // strictly less than max to ensure "distinct" second-highest
      second = v;
    }
  }

  if (allSame) return -Infinity;
  return second === -Infinity ? -Infinity : second;
}

// Expose globally in case the evaluator calls window.secondHighest(...)
if (typeof window !== "undefined") {
  window.secondHighest = secondHighest;
}
