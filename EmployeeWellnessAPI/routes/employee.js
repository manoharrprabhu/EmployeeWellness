var logAndRespond = function logAndRespond(err, res, status) {
    console.error(err);
    res.statusCode = ('undefined' === typeof status ? 500 : status);
    res.send({
        result: 'error',
        err: err.code
    });
};

var handleConnection = function handleConnection(callback, req, res) {
    req.mssql.connect(req.conf, function (err) {
        if (err) { logAndRespond(err, res); return; }
        var request = new req.mssql.Request();
        callback(request, res);
    });
};

function handleGet(req, res) {
    //console.log('-----called get all ------');
    // var limit = ('undefined' === typeof req.params.limit) ? 20: req.params.limit;
    request.query('select Top 5* from  TimeSheet', function (err, recordset) {
        // ... error checks 
        if (err) { logAndRespond(err, res); return; }
        if (recordset.length === 0) { res.send(204); return; }
        
        res.send({
            result: 'success',
            err: '',
            json: recordset,
            length: recordset.length,
            StatusCode: 200
        });

    });
    //connection.query('SELECT * FROM Test1 ORDER BY id DESC LIMIT ' + limit, function handleSql(err, rows) {
    //    if (err) { logAndRespond(err, res); return; }
    //    if (rows.length === 0) { res.send(204); return; }
    //    res.send({
    //        result: 'success',
    //        err: '',
    //        json: rows,
    //        length: rows.length,
    //        StatusCode: 200
    //    });
    //    connection.release();
    //});
}
//function handleFind(connection, req, res) {
//    console.log('-----called find ------');
//    var find = function find(id) {
//        connection.query('SELECT * FROM Test1 WHERE id = ?', id, function handleSql(err, rows) {
//            if (err) { logAndRespond(err, res); return; }
//            if (rows.length === 0) { res.send(204); return; }
//            res.send({
//                result: 'success',
//                err: '',
//                id: id,
//                json: rows[0],
//                length: 1
//            });
//            console.log(rows[0]);
//            connection.release();
//        });
//    };
//    var cacheFind = req.cache(find, { async: true, maxAge: 1000 * 60, preFetch: true });
//    cacheFind(req.params.id);
//}
//function handleIns(connection, req, res) {
//    connection.query('INSERT INTO Test1 SET ?', req.body, function handleSql(err, result) {
//        if (err) { logAndRespond(err, res); return; }
//        res.statusCode = 201;
//        res.send({
//            result: 'success',
//            err: '',
//            id: result.insertId
//        });
//        connection.release();
//    });
//}
//function handleUpd(connection, req, res) {
//    connection.query('UPDATE Test1 SET ? WHERE id=' + req.params.id, req.body, function handleSql(err) {
//        if (err) { logAndRespond(err, res); return; }
//        handleFind(connection, req, res);
//    });
//}
//function handleDel(connection, req, res) {
//    console.log('---delete called -----');
//    connection.query('DELETE FROM Test1 WHERE id = ?', req.params.id, function handleSql(err) {
//        if (err) { logAndRespond(err, res); return; }
//        res.send({
//            result: 'success',
//            err: '',
//            id: req.params.id
//        });
//        connection.release();
//    });
//}


exports.get = function (req, res) {
    // res.send([{Id:1,FName:"abc",LName:"xyz"}, { Id: 2, FName: "asd", LName: "fgh" }])
    handleConnection(handleGet, req, res);
};
exports.find = function (req, res) {
    res.send({ Id: 1, FName: "abc", LName: "xyz" })
    //handleConnection(handleFind, req, res);
};
exports.ins = function (req, res) {
    res.send({ Id: 1, FName: "abc", LName: "xyz" })
    //handleConnection(handleIns, req, res);
};
exports.upd = function (req, res) {
    res.send({ Id: 1, FName: "abc", LName: "xyz" })
    //handleConnection(handleUpd, req, res);
};
exports.delete = function (req, res) {
    res.send({ Id: 1, FName: "abc", LName: "xyz" })
    //handleConnection(handleDel, req, res);
};