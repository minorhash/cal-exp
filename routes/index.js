var express = require('express');
var router = express.Router();
var mail="minorhash@gmail.com";

var mon1= require('./js/mon/mon1');
var mon2= require('./js/mon/mon2');
var mon3= require('./js/mon/mon3');
var m1=mon1(mail)
var m2=mon2(mail)
var m3=mon3(mail)
var mon,cal

var getMon=function(req, res, next) {
var d=new Date();
mon=d.getMonth()
if(par==1){
cal=m1
}else if(par==2){
cal=m2
}else if(par==3){
cal=m3
}
next()}

var chk=function(req, res, next) {
console.log(m3)
next()}


var ren=function(req, res, next) {
    res.render('index', { title: 'Express',
mon:mon+1,
cal:cal

});
}

router.get('/',[getMon,chk,ren]);

module.exports = router;
