const mix = (...cb) => {
    let result = { errors: [] };
    cb.forEach((element, i) => {
        if (typeof element !== 'function')
            throw new Error('Each parameters must be function.');
        try {
            result.value = i == 0 ? element() : element(result.value);
        } catch (err) {
            result.errors.push({
                name: err.name,
                message: err.message,
                stack: err.stack,
                level: i
            });
        }
    });
    return result;
};
const result = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
});
console.log(result)