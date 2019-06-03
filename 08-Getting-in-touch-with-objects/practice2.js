const person = {
    get salary() {
        const date = new Date();
        const day = date.getDate();
        return this.rate ? this.rate * day : 0;
    },
    set salary(err) {
        throw new Error('You can\'t change this property')
    }
}

Object.getOwnPropertyDescriptor(person, 'rate', {
    configurable: false,
    enumarable: false
});

person.rate = 30;

console.log(person.salary)