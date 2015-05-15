//require("bootstrap");
require("bootstrap/button");
var $=require("jquery");
var alert=require("libs/alert");

var app=module.exports=function(options){
    $(options.btn).click(function () {
        $(options.btn).button("loading");
        $.ajax(options.remote)
            .then(function(response){
                alert("<pre>"+JSON.stringify(response,null,4)+"</pre>")
            })
            .always(function () {
                $(options.btn).button("reset");
            })
    })
}