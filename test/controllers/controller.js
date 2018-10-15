const Person = require('../models/model.js'),
    view = require('../views/view.js');

let indexAction = (request, response) => {
        response.send({
            methods: require('http').METHODS,
            count: require('http').METHODS.length
        });
    },
    listAction = (request, response) => {
        let person = new Person(),
            viewed = view(person.persons);
        response.send(viewed);
    };

module.exports = {
    indexAction,
    listAction
};
