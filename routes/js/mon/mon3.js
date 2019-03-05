var eve=require("evedb");
//var mail="minorhash@gmail.com";

var mon3;

var getMon3=function(mail){
mon3=eve.mon3(mail)
return mon3;

}

module.exports=getMon3
