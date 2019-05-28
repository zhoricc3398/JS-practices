function f(number){
    if (typeof number !== 'number') {
        throw new Error('parameter type is not a Number')
    }
    return number ** 3;
}
console.log(f(5));
console.log(f('Content'))