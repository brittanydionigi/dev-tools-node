var util = require(__dirname + '/../libs/util.js');

module.exports = function (express, app) {

    // Common configuration
    app.configure(function () {

        // Configure jQuery template engine
        express.version = require('express/package.json').version;

        app.use(express.bodyParser());
        app.use(app.router);

        // Create static file servers for the build and public folders
        app.use(express.static(__dirname + '/../public'));
    });

    // Development specific configuration
    app.configure('development', function () {
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });

};
