const addNumbersRecursive = (num) => {
  if (num === 1) {
    return 1;
  }
  return num + addNumbersRecursive(num - 1);
};

const result = addNumbersRecursive(7);
console.log(result);
