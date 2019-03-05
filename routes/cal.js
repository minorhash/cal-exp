var express = require('express');
var router = express.Router();
// glob
var par,mon

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

var getPar=function(req, res, next) {
par=req.params.id
next()}

var chk=function(req, res, next) {
console.log(par)
console.log(cal)
next()}

// get
var gcb= function(req, res, next) {

res.render("cal", {
title: par,
par:par,mon:mon+1

});
}

router.get('/cal-:id', [getPar,getMon,chk,gcb])
// post


module.exports = router;
