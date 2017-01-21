/**
 * Created by Administrator on 2016/10/19 0019.
 */
var riqi=document.getElementById("date");
var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");
var monthNames = new Array("January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December");
var now = new Date();
var gday=now.getDay();
var year=now.getFullYear();
var gmouth=now.getMonth();
var cover=document.getElementById("cover");
var pop1=document.getElementById("pop1");
var ok1=document.getElementById("ok1");
gday=dayNames[gday];
gmouth=monthNames[gmouth];
var iidate=now.getDate();
if(iidate<10){
    iidate="0"+iidate;
}
var riqiHtml=gmouth+" "+iidate+", "+year;
riqi.innerHTML=riqiHtml;
//进度条
var fruits = ["2droid.lib", "7droid.lib", "8droid.lib", "3droid.lib", "12droid.lib", "contact.lib"];
var androidSystem = ["flash","messages","drive","appli","system","mempart"];
var androidPart = ["143","962","931","323","087","225"];
var androidIndex;
// function startTimer() {
//     var Timer;
//     var TotalSeconds;
//     Timer = document.getElementById('count-down');
//     TotalSeconds = 89;
//     var secs = 0;
//     var IntervalId = setInterval(function() {
//         var mins = parseInt(TotalSeconds / 60);
//         secs = TotalSeconds % 60;
//         secs = secs < 10 ? '0'+secs: secs;
//         //Timer.innerHTML = mins +":"+secs;
//
//         // $('#count-down').html(mins +":"+secs); 
//         TotalSeconds -= 1;
//         if (TotalSeconds <= 0) {clearInterval(IntervalId);}
//     }, 500);
// }
ok1.onclick=cover.onclick=function(){
    pop1.style.display="none";
    document.getElementById("progress").style.display = "block";
    cover.style.display="none";
    function scanBar() {
        var barWidth = 1;
        var IntervalId = 0;
        IntervalId = setInterval(function() {
            document.getElementById("bar").style.width = barWidth+"%";
            document.getElementById("barText").innerHTML ="Available system memory "+barWidth+"%";
            androidIndex = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

            document.getElementById("barFiles").innerHTML = fruits[androidIndex]+"."+androidSystem[androidIndex]+"."+androidPart[androidIndex];
            if (barWidth==14) {
                clearInterval(IntervalId);
                document.getElementById("barFiles").innerHTML = "Scanning over!";
                document.getElementById("statusText").style.display = "block";
                document.getElementById("more-info").style.display = "block";
                document.getElementById("button").style.display = "block";

                //startTimer();
            }
            barWidth +=1;
        }, 55);
    }
    scanBar();


}
