const factorialRecursive = (num) => {
    if(num === 1){return 1}
    return factorialRecursive(num -1) * num

}

const result = factorialRecursive(4)
console.log(result);