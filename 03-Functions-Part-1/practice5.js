var isPositive = function(n) {
    if (typeof n !== 'number') {
        throw new Error('all parameters type should be a Number');
    }
    return n > 0 ? true : false;
}
var numbers = [1, 2, -4, 3, -9, -1, 7];
var arr = [];

for (var n of numbers) {

    if (isPositive(n)) {
        arr.push(n);
    }
}

console.log(isPositive(-3));
console.log(isPositive(3));
console.log(isPositive('s'));