exports.setup = function setup(app, conf) {
    var mssql = require('mssql')
      , express = require('express')
      , configs = {
            server   : conf.db.mssql.host,
            user     : conf.db.mssql.user,
            password : conf.db.mssql.password,
            database : conf.db.mssql.database,    
            options  : {
               // encrypt: true // Use this if you're on Windows Azure 
            }
        };
    
    app.use(function (req, res, next) {
        req.conf = configs;
        req.mssql = mssql;
        //req.cache = require('memoizee');
        req.store = app.locals;
        next();
    });
    
};