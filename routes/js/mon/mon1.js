var eve=require("evedb");
//var mail="minorhash@gmail.com";

var mon1;

var getMon1=function(mail){
mon1=eve.mon1(mail)
return mon1;

}

module.exports=getMon1
