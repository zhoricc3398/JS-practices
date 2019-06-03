function upperCaseFirst(string) {
    if (typeof string !== 'string') {
        throw new Error('parameter must be string');
    }
    const str = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(str);
}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''