var f = function(n) {
    if (typeof n !== 'number') {
        throw new Error('parameter type is not a Number');
    } else if (n < 1 || n > 7) {
        throw new Error('parameter should be in the range of 1 to 7')
    } 
    var day = ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'];
    return day[n]
}

console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));