var eve=require("evedb");
//var mail="minorhash@gmail.com";

var mon6;

var getMon6=function(mail){
mon6=eve.mon6(mail)
return mon6;

}

module.exports=getMon6
