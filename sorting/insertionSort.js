const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const item = arr.splice(i, 1)[0];
        arr.splice(j, 0, item);
      }
    }
  }

  return arr;
};

console.log(insertionSort([10, 5, 6, 3, 2, 8, 9, 4, 7, 1]));
