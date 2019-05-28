var f = function() {
    var sum = 0;
    for (numbers of arguments) {
        if (typeof numbers !== 'number'){
            throw new Error('all parameters type should be a Number');
        }
        sum += numbers;
    }
    return sum;
}

console.log(f(1,2,3,4,5));
console.log(f(1,1,1,1,1,1,1,1,4));
console.log(f(1,2,'s',4));