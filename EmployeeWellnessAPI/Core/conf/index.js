var tool = require('cloneextend'),
    conf = {};

conf.defaults = {
    application: {
        middleware  : ['compress', 'json', 'urlencoded', 'logger']
    },
    server: {
        host        : 'localhost',
        port        : 8000
    },
    db: {
        mssql: {
            host        : '',
            user        : '',
            password    : '',
            database    : ''
        }
    },
};

exports.get = function get(env, obj) {
    var settings = tool.cloneextend(conf.defaults, conf[env]);
    return ('object' === typeof obj) ? tool.cloneextend(settings, obj) : settings;
};