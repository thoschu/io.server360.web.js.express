const express = require('express'),
    morgan = require('morgan'),
    router = require('./router.js'),
    app = express();

app.use(morgan('combined', {
    immediate: true
}));

router(app);

app.listen('8888', (...params) => {
    process.stdout.write("Server listening on port 8888\n");
});
