var f = function(a,b,c) {
    for (var numbers of arguments) {
        if (typeof numbers !== 'number') {
            throw new Error('all parameters type should be a Number');
        }
    }
    return (a - b) / c;
}

console.log(f(9,3,2));
console.log(f('s',9,3));
