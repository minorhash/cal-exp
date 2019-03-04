var express = require('express');
var router = express.Router();
var mail="minorhash@gmail.com";

var mar= require('./js/mar');
var marmail=mar(mail)

var chk=function(req, res, next) {
console.log(mar(mail))
next()}

var ren=function(req, res, next) {
    res.render('index', { title: 'Express',
mar:marmail
    });
}

router.get('/',[chk,ren]);

module.exports = router;
