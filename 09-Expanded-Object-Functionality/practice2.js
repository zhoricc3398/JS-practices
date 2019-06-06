Object.prototype.mergeDeepRight = function(obj) {
    Object.keys(obj).forEach((item) => {
        if (typeof obj[item] !== 'object') {
            this[item] = obj[item];
        } else if (Array.isArray(obj[item])) {
            this[item] = this[item].concat(obj[item]);
        } else if (this.hasOwnProperty(item)) {
            this[item].mergeDeepRight(obj[item]);
        }
    });
    return this;
}

Object.defineProperty(Object.prototype, 'mergeDeepRight', {enumerable: false} );

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});

console.log(data);
console.log(data.contact.meta.tags);