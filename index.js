const express = require('express'),
    router = require('./router.js'),
    app = express();

router(app);

app.listen('8888', (...params) => {
    process.stdout.write("Server listening on port 8888\n");
});
