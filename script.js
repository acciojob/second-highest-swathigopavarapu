// your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const v = arr[i]; 
    if (v > max) {
      second = max;
      max = v;
    } else if (v < max && v > second) {
      second = v;
    }
  }

  return second;
}
window.secondHighest = secondHighest;