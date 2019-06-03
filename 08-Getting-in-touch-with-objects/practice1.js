const person = {
    get salary() {
        const date = new Date();
        const day = date.getDate();
        const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() - date.getDate();

        return days - day > 20 ? 'good salary' : 'bad salary'
    }
};

console.log(person.salary);