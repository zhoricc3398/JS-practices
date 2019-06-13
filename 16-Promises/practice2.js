const getCustomers = (customers, countries) => 
    new Promise((resolve, reject) => {
        return resolve(customers.map(customer => {
            if (!(countries.find(country => customer.id === country.id))) {
                reject(`We don't have information about country for this customer: ${customer.name}`);
            }
            return customer.verified ? Object.assign(customer, countries.find(country => customer.id === country.id)) : customer
        }));
    })

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))