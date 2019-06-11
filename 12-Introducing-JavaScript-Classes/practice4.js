class MyString {
    reverse(string) {
        return string.split('').reverse().join('');
    }

    ucFirst(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    ucWords(string) {
        return string.split(' ').map((string) => string[0].toUpperCase() + string.slice(1)).join(' ');
    }
}

var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'