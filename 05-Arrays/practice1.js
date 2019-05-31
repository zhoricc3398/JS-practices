function forEach(arr, cb) {
    if (!(Array.isArray(arr))) {
        throw new Error('First parameter required and has to be only array');
    } else if (typeof cb !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}
const arr = [1, 2, 3];
forEach(arr, function(item, i, arr) {
    console.log(i + ': ' + item + ' (array: ' + arr + ')');
});