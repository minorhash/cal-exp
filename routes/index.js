var express = require('express');
var router = express.Router();
var mail="minorhash@gmail.com";

var eve = require('./js/eve');
var evemail=eve(mail)

var chk=function(req, res, next) {
console.log(eve(mail))
next()}

var ren=function(req, res, next) {
    res.render('index', { title: 'Express',
eve:evemail
    });
}

router.get('/',[chk,ren]);

module.exports = router;
