window.onload=function(){
	var riqi=document.getElementById("riqi");

	var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");
    var monthNames = new Array("January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December");
    var now = new Date();
	var gday=now.getDay();
	var gmouth=now.getMonth();
	gday=dayNames[gday];
	gmouth=monthNames[gmouth];
	var iidate=now.getDate();
	if(iidate<10){
		iidate="0"+iidate;	
	}
	var riqiHtml=gmouth+" "+iidate+" "+now.getHours()+":"+now.getMinutes();
	riqi.innerHTML=riqiHtml;
	// Claim.onclick=function(){
	// 	pop5.style.display="block";
	// 	cover.style.display="block";
	// }
	// cover.onclick=function(){
	// 	pop5.style.display="none";
	// 	cover.style.display="none";
	// }
}
