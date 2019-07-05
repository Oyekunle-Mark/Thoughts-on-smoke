const mergeSort = arr => {
  if (arr.length < 2) return arr;

  const midPoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) sorted.push(left.shift());
    else sorted.push(right.shift());
  }

  return [...sorted, ...left, ...right];
};

console.log(mergeSort([10, 5, 6, 3, 2, 8, 9, 4, 7, 1]));
