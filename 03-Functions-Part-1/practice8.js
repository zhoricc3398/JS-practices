var f = function(arr) {
    if (typeof arr !== 'object') {
        throw Error('parameter type should be an array');
    } else if (arr.length == 0) {
        throw Error('parameter can\'t be an empty');        
    }
    console.log(arr[0])
    arr.splice(0, 1);
    return arr.length > 0 ? f(arr): false;
}

f([1,2,3,4,5]);
f(1,2,3,4,5);
f('Content');
f([]);