function extractCurrencyValue(source) {
    if (typeof source !== 'string') {
        throw new Error('First parameter must be a string')
    }
    return source.substring(1) * 1;
}
console.log(extractCurrencyValue('$120')); // 120