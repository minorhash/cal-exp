var eve=require("evedb");
//var mail="minorhash@gmail.com";

var mon4;

var getMon4=function(mail){
mon4=eve.mon4(mail)
return mon4;

}

module.exports=getMon4
