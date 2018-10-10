class Person {
    constructor() {
        this._persons = [];
        this.persons = 'Thomas';
        this.persons = 'Tom';
        this.persons = 'Sch.';
        this.persons = 'S.';
    }

    get persons() {
        return this._persons;
    }

    set persons(person) {
        this._persons.push(person);
    }
}

module.exports = Person;
