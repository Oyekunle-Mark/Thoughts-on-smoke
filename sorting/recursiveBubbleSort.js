const bubbleSort = arr => {
  const sort = (numberArr, swapped) => {
    if (!swapped) return numberArr;

    let didSwap = false;

    numberArr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        didSwap = true;
      }
    });

    return sort(numberArr, didSwap);
  };

  return sort(arr, true);
};

console.log('TCL: bubbleSort([5, 3, 1, 4, 6])', bubbleSort([5, 3, 1, 4, 6]));
console.log('TCL: bubbleSort([2, 4, 6, 2, 9, 0, 23, 24, 22, 1])', bubbleSort([2, 4, 6, 2, 9, 0, 23, 24, 22, 1]));
