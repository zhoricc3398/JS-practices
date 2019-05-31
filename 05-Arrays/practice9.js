function arrayFill(item, n) {
    let arr = [];
    if (!(Array.isArray(item)) && typeof item !== 'number' && typeof item !== 'string') {
        throw new Error('First parameter required and has to be only number, string, object array');
    } else if (typeof n !== 'number') {
        throw new Error('Second parameter required and has to be only number');
    }
    for (let i = 0; i < n; i++) {
        arr.push(item);
    }
    return arr;
}

const arr = arrayFill('x',5);
console.log(arr);