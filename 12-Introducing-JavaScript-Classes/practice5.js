class Validator {
    isEmail(str) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
    }

    isDomain(str) {
        return /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/.test(str);
    }

    isDate(str) {
        return /([0-9]{2}[\./]){2}[0-9]{4}/.test(str);
    }

    isPhone(str) {
        return /\+[0-9]{3} ?\([0-9]{2}\) ?[0-9]{3}-?([0-9]{2}-?){2}/.test(str);
    }
}

var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country