function sortArray(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}
const numbers = [5, 2, 9, 1, 10];
console.log(sortArray(numbers));