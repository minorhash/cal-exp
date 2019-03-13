var express = require('express');
var router = express.Router();
// glob
var par,mon

var mail="minorhash@gmail.com";

var mon1= require('./js/mon/mon1');
var mon2= require('./js/mon/mon2');
var mon3= require('./js/mon/mon3');
var mon4= require('./js/mon/mon4');
var mon5= require('./js/mon/mon5');
var m1=mon1(mail)
var m2=mon2(mail)
var m3=mon3(mail)
var m4=mon4(mail)
var m5=mon5(mail)

var getPar=function(req, res, next) {
par=req.params.id
next()}

var getMon=function(req, res, next) {
var d=new Date();
mon=d.getMonth()
if(par==1){
cal=m1
}else if(par==2){
cal=m2
}else if(par==3){
cal=m3
}else if(par==4){
cal=m4
}else if(par==5){
cal=m5

}
next()}

var chk=function(req, res, next) {
console.log(par)
console.log(m4)
next()}

// get
var gcb= function(req, res, next) {

res.render("eve", {
title: par,
    par:par,mon:mon+1,
    cal:cal

});
}

router.get('/eve-:id', [getPar,getMon,chk,gcb])
// post


module.exports = router;
