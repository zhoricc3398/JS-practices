function reverse(arr) {
    if (!(Array.isArray(arr))) {
        throw new Error('First parameter required and has to be only array')
    } else if (arr.length == 0) {
        throw new Error('Array must not be empty')
    }
    let array = [];
    for (i = arr.length - 1; i >= 0; i--) {
        array.push(arr[i]);
    }
    return array;
}

const arr = [1,2,3];
const array = reverse(arr)
console.log(array)