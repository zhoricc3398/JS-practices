function checkSpam(source, example) {
    if (typeof source !== 'string') {
        throw new Error('First parameter must be a string')
    } else if (typeof example !== 'string') {
        throw new Error('Second parameter must be a string')
    }
    if (source.toLowerCase().indexOf(example.toLowerCase()) > 0) {
        return true;
    }
    return false;
}
console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true