function f(arr) {
    if (!(Array.isArray(arr))) {
        throw new Error('First parameter required and has to be only array');
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' && !(Array.isArray(arr[i]))) {
            throw new Error('Every element must be number')
        }
        if (Array.isArray(arr[i])) {
            sum += f(arr[i]);
        } else {
            sum += arr[i];
        }
    }
    return sum;
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr));
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2));
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3));
const arr4 = [[[[[]]]]];
console.log(f(arr4));
const arr5 = [[[[[],3]]]];
console.log(f(arr5));