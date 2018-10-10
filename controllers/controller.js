const Person = require('../models/model.js');

const indexAction = (request, response) => {
        response.send('Root / Index');
    },
    listAction = (request, response) => {
        let person = new Person();
        response.send(person.persons.join(" / "));
    };

module.exports = {
    indexAction,
    listAction
};
