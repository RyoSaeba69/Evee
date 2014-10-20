/**
 * Created by antoine on 10/20/14.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.hmtl');
});

module.exports = router;