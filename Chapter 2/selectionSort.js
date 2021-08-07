const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      let min;
      let minIndex;
    for (let j = i; j < array.length; j++) {
      debugger;
      if (array[j] < min || min === undefined) {
        min = array[j];
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
};

const result = selectionSort([5, 3, 1, 4, 2]);
console.log(result);
