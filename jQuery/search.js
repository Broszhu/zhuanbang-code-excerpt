/**
 * Created by Administrator on 2017/3/20 0020.
 */

var $page=$("#page");
var url = '/financial/user_red_packets';
var deviceId=$page.find("#keyword").val();
var state=$page.find("#card_status").find("li").filter(".active").find("a").data("state")||"";


var pageUtility={
    init:function(){},
    bind:function(){
        var self=this;
        $page.on("click","#search",function(e){
            e.preventDefault();
            deviceId=$page.find("#keyword").val();
            self.searchModule();
        });
        $page.on("click", "#reset", function () {
            window.location.href = url;
        });
        $page.on("keypress","#keyword",function(e){
            e = e || window.event;
            if (e.keyCode==13){
                deviceId = $(this).val();
                self.searchModule()
            }
        });
        $page.on("blur","#keyword",function(e){
            deviceId = $(this).val();
        });

        //红包状态选择
        $page.on("click","#card_status .filter-item",function(e){
            e.preventDefault();
            var $self=$(this);
            state=$self.find("a").data("state")||"";
            self.searchModule()
        });
    },
    searchModule:function(){
        window.location.href = url + '?id=' + deviceId + '&state=' + state;
    }
};