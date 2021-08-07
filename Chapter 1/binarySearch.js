const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    let mid = Math.floor((startIndex + endIndex) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      startIndex = mid + 1;
    }
    if (array[mid] > target) {
      endIndex = mid - 1;
    }
  }
  return -1
};

const search = binarySearch([1,2,3,4,5,6,7,8,9,10], 9)
console.log(search);