const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  return arr;
};

console.log('TCL: bubbleSort([5, 3, 1, 4, 6])', bubbleSort([5, 3, 1, 4, 6]));
