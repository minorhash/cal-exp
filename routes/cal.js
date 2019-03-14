var express = require('express');
var db= require('evedb');
var router = express.Router();
// glob
var par,cal,num,mon=[]
var mail="minorhash@gmail.com";

var getPar=function(req, res, next) {
par=req.params.id
    num=Number(par)
next()}

var getCal=function(req, res, next) {
    mon=[]
cal=db.mailCal(mail)
    var pat=new RegExp("2019-0"+par)
    var tes=[]
for (var i=0;i<cal.length;i++){
tes.push(pat.test(cal[i].date))

if(tes[i]==true){
mon.push(cal[i])
}
}

next()}

var chk=function(req, res, next) {
console.log(par)
console.log(mon.length)
console.log(mon[0])
next()}

// get
var gcb= function(req, res, next) {

res.render("cal", {
title: par,
    par:par,
    mon:mon,
    num:num

});
}

router.get('/cal-:id', [getPar,getCal,chk,gcb])
// post

module.exports = router;
