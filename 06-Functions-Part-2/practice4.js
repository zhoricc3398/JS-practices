const compose = (...cb) => {
    return result => {
        return cb.reduceRight((res, element) => {
            if ( typeof element !== 'function' )
            throw new Error('Each parameters must be function.');
            return element(res);
        }, result);
    };
};
const finresult = compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a'); // 'abc'
console.log(finresult);