const bubbleSort = arr => {
  let swapped;

  do {
    swapped = false;

    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        swapped = true;
      }
    });
  } while (swapped);

  return arr;
};

console.log('TCL: bubbleSort([5, 3, 1, 4, 6])', bubbleSort([5, 3, 1, 4, 6]));
