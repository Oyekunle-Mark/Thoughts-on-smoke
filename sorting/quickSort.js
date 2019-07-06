const quickSort = arr => {
  if (arr.length < 2) return arr;

  const left = [];
  const rigth = [];
  const sorted = [];
  const pivot = arr.pop();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else rigth.push(arr[i]);
  }

  return sorted.concat(quickSort(left), pivot, quickSort(rigth));
};

console.log(quickSort([4, 2, 3, 1, 5]));
