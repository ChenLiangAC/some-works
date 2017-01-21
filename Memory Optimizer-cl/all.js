
// Dots render
var dots = 1;

function repeatStr(str, count) {
    return new Array(count + 1).join(str);
}

function dotted() {
    window.setTimeout(dotted_render, 100);
}

function dotted_render() {
    dot_element = document.getElementById('dots');
    dot = '.';
    if (dots == 3) {
        dots = 1;
        dotted();
    } else if (dots == 0) {
        dots = 0;
    } else if (proc_counter == 100) {

    } else {
        dots++;
        dotted();
    }

}

// Procents render
var proc_counter = 0;

function update_proc() {
    window.setTimeout(render_proc, 12.8);
}

function render_proc() {
    proc_counter+=2;
    el_proc.innerHTML = proc_counter + '%';
    el_progress.setAttribute('style', 'width: ' + proc_counter + '%;')
    if (proc_counter < 100) {
        check_counters();
        update_proc();
    } else {
        pause();
        $('.part_1').fadeOut(300)
        $('.part_2').fadeIn(300)
        $('.usr_form').addClass('footertop')
        $('.content').addClass('alert')
        $('body').addClass('alert')
        $('.main_text').addClass('alert')
        //document.getElementById('extra').setAttribute('class', 'block_enable');
        $('.scanned').addClass('dis')
    }
}

var counter_internet = null;
var counter_files = null;
var counter_total = null;
var count_inet = 3;
var count_files = 0;
var count_total = 0;

function check_counters() {
    count_inet_new = proc_counter / 15 >> 0; //35
    count_files_new = proc_counter / 31 >> 0; //51
    count_total_new = count_inet_new + count_files_new;

    if (count_inet != count_inet_new) {
        count_inet = count_inet_new;
        el_counter_internet.innerHTML = count_inet;
        $('#internet').addClass('alert');
    }
    if (count_files != count_files_new) {
        count_files = count_files_new;
        el_counter_files.innerHTML = count_files;
        $('#files').addClass('alert');
    }
    // if (count_total != count_total_new) {
    //     count_total = count_total_new;
    //     el_counter_total.innerHTML = count_total;
    // }
}

//
//



// Change folders render
var el_folders = null;
var folders_counter = 0
var folders = [
	'/asset/3/...appStore.apk',
	'/asset/4/...Application.apk',
	'/asset/6/...twitter.apk',
    '/asset/7/...facebook.apk',
    '/asset/9/...download.apk',
    '/document/10/...download.apk',
    '/download/11/...download.apk',
	'/asset/12/...internetView.apk'
];

function update_folders() {
    window.setTimeout(render_folders,12.8);
}

function render_folders() {
    folders_counter++;
    cnt = folders_counter % folders.length;
    el_folders.innerHTML = folders[cnt];
    if (proc_counter < 100) {
        update_folders();
    }
}


// Timer render
var el_counter_timer = null

var base = 60;
var clocktimer, dateObj, dh, dm, ds, ms;
var readout = '';
var h = 1,
    m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    show = true,
    init = 0,
    ii = 0;

function clearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    show = true;
    readout = '00:00:00.00';
    document.TestForm.stopwatch.value = readout;
    ii = 0;
}

function startTIME() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);

    if (t > 999) {
        s++;
    }
    if (s >= (m * base)) {
        ts = 0;
        m++;
    } else {
        ts = parseInt((ms / 100) + s);
        if (ts >= base) {
            ts = ts - ((m - 1) * base);
        }
    }
    if (m > (h * base)) {
        tm = 1;
        h++;
    } else {
        tm = parseInt((ms / 100) + m);
        if (tm >= base) {
            tm = tm - ((h - 1) * base);
        }
    }
    ms = Math.round(t / 10);
    if (ms > 99) {
        ms = 0;
    }
    if (ms == 0) {
        ms = '00';
    }
    if (ms > 0 && ms <= 9) {
        ms = '0' + ms;
    }
    if (ts > 0) {
        ds = ts;
        if (ts < 10) {
            ds = '0' + ts;
        }
    } else {
        ds = '00';
    }
    dm = tm - 1;
    if (dm > 0) {
        if (dm < 10) {
            dm = '0' + dm;
        }
    } else {
        dm = '00';
    }
    readout = dm + ':' + ds + '.' + ms;
    if (show == true) {
        el_counter_timer.innerHTML = readout;
    }
    clocktimer = setTimeout("startTIME()", 1);
}

function pause() {
    if (init == 0) {
        dateObj = new Date();
        startTIME();
        init = 1;
    } else {
        if (show == true) {
            show = false;
        } else {
            show = true;
        }
    }
}






var now = new Date();
var gday=now.getDay();
var gmouth=now.getMonth();
var date = document.getElementById("demo");
var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");
var monthNames = new Array("January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December");

gday=dayNames[gday];
gmouth=monthNames[gmouth];
var iidate=now.getDate();
if(iidate<10){
    iidate="0"+iidate;
}
var today=gmouth+"/"+iidate+"/"+now.getHours()+":"+now.getMinutes();
date.innerHTML = today;


$(window).load(function () {


    el_proc = document.getElementById('proc');
    el_progress = document.getElementById('progress');
    el_counter_timer = document.getElementById('counter_timer');
    el_counter_total = document.getElementById('counter_total')
    el_counter_files = document.getElementById('counter_files')
    el_counter_internet = document.getElementById('counter_internet')


    el_footer = document.getElementById('footer');
    el_bugs = document.getElementById('bugs');
    el_folders = document.getElementById('folders');
    el_form_1 = document.getElementById('form_1');
    el_form_2 = document.getElementById('form_2');
    el_form_3 = document.getElementById('form_3');
    el_folder_class = document.getElementById('folder_class');
    el_htmlo_O = document.getElementById('htmlo_O');
    el_version = document.getElementById('version');

    pause();
    dotted();
    render_folders();
    render_proc();
});
