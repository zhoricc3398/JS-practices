function filter(arr, cb) {
    let filtered = [];
    if (!(Array.isArray(arr))) {
        throw new Error('First parameter required and has to be only array');
    } else if (typeof cb !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr)) filtered.push(arr[i]);
    }
    return filtered;
}
const arr = [1, 2, 3];
const filteredArray = filter(arr, function(item, i, arr) {
    return item > 2;
});
console.log(filteredArray);