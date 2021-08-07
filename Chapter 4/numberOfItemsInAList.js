const numberOfItems = (arr) => {
  if (arr[0] === undefined) return 0;
  arr.pop();
  return 1 + numberOfItems(arr);
};

const result = numberOfItems([]);
console.log(result);
