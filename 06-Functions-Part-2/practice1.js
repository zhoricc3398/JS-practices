const obj = {
    getName: function(message) {
        return `${message}: ${this.name}`;
    }
};
function bind(func, link, ...n) {
    return() => func.call(link, ...n);
}
const getName = obj.getName;
const f = bind(getName, {name: 'Pitter'}, 'My name');
console.log(f()); // My name: Pitter