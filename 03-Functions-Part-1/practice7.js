var getDivisors = function(n) {
    if (typeof n !== 'number') {
        throw new Error('parameter type is not a Number');
    } else if (n == 0) {
        throw new Error('parameter can\'t be a 0');
    }
    var arr = [];
    for (var a = 1; a <= n; a++) {
        if (n % a != 0) {
            continue;
        }
        arr.push(a)
    }
    return arr;
}

console.log(getDivisors(50));
console.log(getDivisors('Content'));
console.log(getDivisors(0));