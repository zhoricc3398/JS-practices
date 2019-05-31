function reduce(arr, cb, acc) {
    let sum = acc;
    if (!(Array.isArray(arr))) {
        throw new Error('First parameter required and has to be only array');
    } else if (typeof cb !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    } else if (typeof acc !== 'string' && typeof acc !== 'number') {
        throw new Error('Third parameter required and has to be only string or number')
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        if(cb(sum, arr[i], i, arr)) sum = cb(sum, arr[i], i, arr);
    }
    return sum;
}
const arr = [1,2,3];
const acc = 0;
const result = reduce(arr, function(acc, item, i, arr) {
    return acc += item;
}, acc);
console.log(result)