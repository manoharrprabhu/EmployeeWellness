var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function (req, res) {
    res.send('users',new {title:"resource"});
});

module.exports = router;