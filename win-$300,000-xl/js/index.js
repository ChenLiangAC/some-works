/**
 * Created by Administrator on 2016/9/27 0027.
 */

var sec = 241;


function countDown() {
    sec--;

    if (sec <= 9) {
        sec = "0" + sec;
    }
    var time = " The gift card remaining: <span style='color: #f47421'>" + sec+" </span>"  ;
    if (document.getElementById) {
        document.getElementById('remain').innerHTML = time;
    }

    SD = window.setTimeout("countDown();", 1500);
    if (sec == '00') {
        sec = "00";
        window.clearTimeout(SD);
    }
}
window.onload = countDown;
//

