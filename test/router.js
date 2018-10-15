const controller = require('./controllers/controller.js');

module.exports = (app) => {
    app.get('/', controller.indexAction);

    app.get('/list', controller.listAction);
};
