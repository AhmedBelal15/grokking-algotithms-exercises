const maxInArray = (arr) => {
  const nums = [...arr];
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums[0] > nums[1]) {
    nums.splice(1, 1);
  } else if (nums[1] > nums[0]) {
    nums.splice(0, 1);
  }
  return maxInArray(nums)
};

const result = maxInArray([1, 2, 3, 4, 5]);
console.log(result);
