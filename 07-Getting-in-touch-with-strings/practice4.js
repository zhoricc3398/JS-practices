function extractCurrencyValue(source) {
    if (typeof source !== 'string') {
        throw new Error('First parameter must be a string')
    }
    return parseInt(source.substring(1));
}
console.log(extractCurrencyValue('$120')); // 120