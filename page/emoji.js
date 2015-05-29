$=require("jquery");
emojione=require("emojione");
var log=require('loglevel');

var result = emojione.shortnameToImage($(".emoji").html());
$(".emoji").html(result)
log.warn("1111")
log.error('222')
