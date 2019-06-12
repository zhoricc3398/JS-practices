class DB {
    constructor() {
        this._persons = new Map();
    }
    create(person) {
        const {name, age, country, salary} = person;
        if (typeof name !== 'string') {
            throw new Error('Name is required field with type string');
        }
        if (typeof age !== 'number') {
            throw new Error('Age is required field with type number');
        }
        if (typeof country !== 'string') {
            throw new Error('Country is required field with type string');
        }
        if (typeof salary !== 'number') {
            throw new Error('Salary is required field with type number');
        }
        if (this._id >= 0) {
            this._id++
        } else {return this._id}
        console.log(_id)
    }
    read(id) {
        if (typeof id === 'undefined' || typeof id !== 'string') {
            throw new Error('Parameter must be string');
        }   
    }
    readAll(...n) {
        if (n.lenght > 0) {
            throw new Error('readAll shouldn\'t have a parameter');
        }
        return Array.from(this.users.values());
    }
    update(id, user) {
        if (typeof id === 'undefined' || typeof id !== 'string') {
            throw new Error('First parameter must be a string');
        }
        if (typeof user !== 'object') {
            throw new Error('Second parameter must be an object');
        }
        if (!(this.users.has(id))) {
            throw new Error('User with this id doesn\'t exist');
        }
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true