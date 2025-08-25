function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (!Number.isFinite(v)) continue;

    console.log(`Current value: ${v}, Max: ${max}, Second: ${second}`);

    if (v > max) {
      second = max;
      max = v;
    } else if (v < max && v > second) {
      second = v;
    }
  }
  
  console.log(`Final Max: ${max}, Final Second: ${second}`);
  return second;
}