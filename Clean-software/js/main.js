/**
 * Created by Administrator on 2016/9/28 0028.
 */
$(function(){
    var $txt=$('#GB');
    (function(){

        var v=parseFloat($txt.html());
        if(v<80){ // 改这里嘛
            $txt.html(++v+'GB');
            setTimeout(arguments.callee,10); // 每100毫秒增长一次
        }
    })();
});