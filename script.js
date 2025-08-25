//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2) 
	  return -Infinity;

  let unique = [...new Set(arr)];

  if (unique.length < 2)
	  return -Infinity; 

  unique.sort((a, b) => b - a);

  return unique[1]; 
}
window.secondHighest = secondHighest;
