class Customers {
    constructor() {
        this._obj = [];
    }
    [Symbol.iterator]() {
        const customers = this._obj.filter(customer => customer.verified === true);
        let i = 0;
        return {
            next() {
                const done = i < customers.length ? false : true;
                const value = !done ? customers[i++] : undefined;

                return {
                    value,
                    done
                }
            }
        }
    }
    add(user) {
        if (typeof user !== 'object') {
            throw new Error('First parameter must be an object');
        }
        if (typeof user.name !== 'string') {
            throw new Error('Name is required to be string');
        }
        return this._obj.push(user);
    }
}

const customers = new Customers();

customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// console log
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }