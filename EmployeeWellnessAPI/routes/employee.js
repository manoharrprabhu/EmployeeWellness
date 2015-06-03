exports.get = function (req, res) {
    res.send([{Id:1,FName:"abc",LName:"xyz"}, { Id: 2, FName: "asd", LName: "fgh" }])
   // handleConnection(handleGet, req, res);
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