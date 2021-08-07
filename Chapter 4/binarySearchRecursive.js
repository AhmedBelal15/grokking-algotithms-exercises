const binarySearchRecursive = (arr, t, startIndex, endIndex) => {
  if (arr.length === 1 && arr[0] !== t) {
    return -1;
  }
  if (arr.length === 1 && arr[0] === t) {
    return 0;
  }

  let mid = Math.floor((startIndex + endIndex) / 2);
  if (arr[mid] === t) {
    return mid;
  }
  if (arr[mid] > t) {
    endIndex = mid;
  } else if (arr[mid] < t) {
    startIndex = mid;
  }
  return binarySearchRecursive(arr, t, startIndex, endIndex);
};
const searchedArray = [1, 2, 3, 4, 5, 6];
const result = binarySearchRecursive(searchedArray, 5, 0, searchedArray.length);
console.log(result);
