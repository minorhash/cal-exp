var eve=require("evedb");
//var mail="minorhash@gmail.com";

var mon2;

var getMon2=function(mail){
mon2=eve.mon2(mail)
return mon2;

}

module.exports=getMon2
