const mix = (...cb) => {
    let result;
    cb.forEach((element, i) => {
        if (typeof element !== 'function')
            throw new Error('Each parameters must be function.');
        result = i == 0 ? element() : element(result);
    });
    return result;
};
const result = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}) // 2
console.log(result);