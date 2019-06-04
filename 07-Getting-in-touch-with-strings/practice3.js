function truncate(string, maxlength) {
    if (typeof string !== 'string') {
        throw new Error('First parameter must be a string')
    } else if (typeof maxlength !== 'number') {
        throw new Error('Second parameter must be a number')
    }
    if (string.length > maxlength) {
        return string.substring(0, 19) + '...';
    }
    return string;
}

console.log(truncate('I wanna to say next thing about this topic', 22)); // 'I wanna to say next...'