var express = require('express');
var router = express.Router();
// glob
var par,mon

var mail="minorhash@gmail.com";
var mar= require('./js/mar');
var feb= require('./js/feb');
var marmail=mar(mail)
var febmail=feb(mail)

var getPar=function(req, res, next) {
par=req.params.id
next()}

var getMon=function(req, res, next) {
var d=new Date();
mon=d.getMonth()
    if(par==3){
cal=marmail
    }else if(par==2){
cal=febmail
    }
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
