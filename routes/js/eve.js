var eve=require("evedb");
//var mail="minorhash@gmail.com";

var maileve;

var getEve=function(mail){
maileve=eve.mailEve(mail)
return maileve;

}

module.exports=getEve
