var eve=require("evedb");
//var mail="minorhash@gmail.com";

var mon5;

var getMon5=function(mail){
mon5=eve.mon5(mail)
return mon5;

}

module.exports=getMon5
