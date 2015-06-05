exports.init = function init(rootfolder) {
    var router = require('./router.js'),
        express = require('express'),
        path = require('path'),
        favicon = require('serve-favicon'),
        logger = require('morgan'),
        cookieParser = require('cookie-parser'),
        bodyParser = require('body-parser'),
        middleware=require("./middleware")
        routes = require('../routes/index'),
        conf=require("./conf").get("development");
    
    var app = express();

    // view engine setup
    app.set('views', path.join(rootfolder, 'views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(require('stylus').middleware(path.join(rootfolder, 'public')));
    app.use(express.static(path.join(rootfolder, 'public')));
    middleware.setup(app, conf);
    router.run(app);
    app.use('/', routes);
    
    app.set('port', process.env.PORT || 3000);
    
    var server = app.listen(app.get('port'), function () {
        debug('Express server listening on port ' + server.address().port);
    });
    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers
    
    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
};





// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

//app.use('/users', users);








