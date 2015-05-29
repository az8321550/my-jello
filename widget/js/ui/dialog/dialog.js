var layer=require("layer");

var dialog={
    init:function(){
        console.log("dialog")
    },
    alert:function(){
        layer.alert("内容")
    },
    sb:function(){
        alert("你是sb")
    }
}

module.exports=dialog;