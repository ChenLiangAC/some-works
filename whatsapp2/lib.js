var kimia_lib = function () {
    var country = "";
    var countryLanguage = "";
    var languages = "";
    var url = "";

    var _attrCountry = "attr-cou";
    var _attrCountryLanguage = "attr-lan";
    var _attrCSS = "attr-css";
    var _classForceDisplay = "forceDisplay";
    var _customCss = "*[attr-cou]{ display: none !important; } *[attr-lan]{ display: none !important; } .forceDisplay{ display: block !important; } .forceDisplayInline{ display: inline-block !important; } ";
    var _defaultCountry = "default";

    var addCss = function (cssRule) {
        var head = document.getElementsByTagName('head')[0];
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        if (s.styleSheet) {
            // IE
            s.styleSheet.cssText = cssRule;
        } else {
            // other browser
            s.appendChild(document.createTextNode(cssRule));
        }
        head.appendChild(s);
    };

    var classToApply = function (element) {
        var cssPostfix = "";
        if (element.getAttribute(_attrCSS)) {
            cssPostfix = element.getAttribute(_attrCSS);
        }
        return _classForceDisplay + cssPostfix;
    };

    var getCountry = function () {
        auxCountry = getURLParameter('co');

        if (auxCountry == null || !findCountryElements(auxCountry)) {
            auxCountry = _defaultCountry;
        } else {
            countryLanguage = getLanguageFromCountry(auxCountry);
        }

        return auxCountry;
    };

    var findByAttributeValue = function (attribute, value) {
        var all = document.getElementsByTagName('*');
        values = [];
        for (var i = 0; i < all.length; i++) {
            if (all[i].getAttribute(attribute) == value) {
                values.push(all[i]);
            }
        }

        return values;
    };

    var findCountryElements = function (countryCode) {
        if (countryCode) {
            elements = findByAttributeValue(_attrCountry, countryCode);
            if (elements.length > 0) {
                return true;
            }
        }
        return false;
    };

    var init = function () {
        //css install
        addCss(_customCss);

        //get params elements
        country = getCountry();
        url = getDecodeUrl();

        //show country elements an language elements
        showCountryLanguageElements();
    };

    var getDecodeUrl = function () {
        var auxUrl = getURLParameter('url');
        decodedUrl = "";
        if (auxUrl != null && auxUrl != "") {
            decodedUrl = Base64.decode(auxUrl);
        }

        return decodedUrl;
    };

    var getLanguageFromCountry = function (auxCountry) {
        // añadir mas lenguajes a este json segun requisitos
        languages = [
            {"af": "af"},
            {"bh": "ar"},
            {"eg": "ar"},
            {"dz": "ar"},
            {"iq": "ar"},
            {"jo": "ar"},
            {"kw": "ar"},
            {"lb": "ar"},
            {"ly": "ar"},
            {"ma": "ar"},
            {"om": "ar"},
            {"qa": "ar"},
            {"sa": "ar"},
            {"sy": "ar"},
            {"tn": "ar"},
            {"ye": "ar"},
            {"by": "by"},
            {"bg": "bg"},
            {"de": "de"},
            {"ch": "de"},
            {"li": "de"},
            {"lu": "de"},
            {"at": "de"},
            {"gr": "gr"},
            {"en": "en"},
            {"au": "en"},
            {"bz": "en"},
            {"ca": "en"},
            {"gb": "en"},
            {"ie": "en"},
            {"jm": "en"},
            {"nz": "en"},
            {"tt": "en"},
            {"us": "en"},
            {"za": "en"},
            {"es": "es"},
            {"ar": "es"},
            {"bo": "es"},
            {"cl": "es"},
            {"co": "es"},
            {"cr": "es"},
            {"do": "es"},
            {"ec": "es"},
            {"gt": "es"},
            {"hn": "es"},
            {"mx": "es"},
            {"ni": "es"},
            {"pa": "es"},
            {"pe": "es"},
            {"py": "es"},
            {"sv": "es"},
            {"uy": "es"},
            {"ve": "es"},
            {"ee": "ee"},
            {"fr": "fr"},
            {"be": "fr"},
            {"gd": "gd"},
            {"hr": "hr"},
            {"il": "il"},
            {"uk": "es"},
            {"in": "in"},
            {"hu": "hu"},
            {"is": "is"},
            {"it": "it"},
            {"jp": "jp"},
            {"kr": "kr"},
            {"lt": "lt"},
            {"lv": "lv"},
            {"mk": "mk"},
            {"my": "my"},
            {"mt": "mt"},
            {"nl": "du"},
            {"pl": "pl"},
            {"pt": "pt"},
            {"br": "pt"},
            {"ro": "ro"},
            {"ru": "ru"},
            {"si": "si"},
            {"sk": "sk"},
            {"rs": "rs"},
            {"al": "al"},
            {"se": "se"},
            {"fi": "fi"},
            {"zu": "zu"},
            {"th": "th"},
            {"tr": "tr"},
            {"ua": "ua"},
            {"vn": "vn"},
            {"cn": "cn"},
            {"tw": "cn"},
            {"sg": "cn"},
            {"no": "en"},
            {"hk": "cn"}
        ];

        for (var i = 0; i < languages.length; i++) {
            //console.log("aux country: " + auxCountry + " lcaux: " + languages[i] + " lcaux_val: " + languages[i][auxCountry]);
            if (typeof languages[i][auxCountry] != "undefined") {
                //console.log("Language country: " + languages[i][auxCountry]);
                return languages[i][auxCountry];
            }
        }

        return null;
    };

    var getURLParameter = function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };

    var redirect = function () {
        document.location.href = url;
    };

    var showCountryLanguageElements = function () {
        //country elements
        if (country) {
            elements = findByAttributeValue(_attrCountry, country);
            if (elements.length > 0) {
                for (var i = 0; i < elements.length; i++) {
                    elements[i].className += classToApply(elements[i]);
                }
            }
        }

        //language elements
        if (countryLanguage) {
            elements = findByAttributeValue(_attrCountryLanguage, countryLanguage);
            for (var i = 0; i < elements.length; i++) {
                elements[i].className += classToApply(elements[i]);
            }
        }
    };

    return {
        init: init,
        getCountry: getCountry,
        getURLParameter: getURLParameter,
        redirect: redirect
    };
}();

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode: function (e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function (e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function (e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
};


/// COOKIES ///


function setCookie(cookie, value, hours) {
            var d, expires;
            if (hours) {
                d = new Date();
                d.setTime(d.getTime() + (hours * 24 * 60 * 60 * 1000));
                expires = "expires=" + d.toGMTString();
            } else {
                expires = "";
            }
            document.cookie = cookie + "=" + value + "; " + expires;

        }

        function getCookie(cookie) {
            var name = cookie + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        }

        function checkCookie() {
            var cookie = location.pathname;
            var cookieValue = getCookie(cookie);
            if (cookieValue != "") {
                kimia_lib.redirect();
            } else {
                var hours = getParameterFromQuerystring('hp');
                if (hours != '') {
                    setCookie(cookie, 'true', hours);
                }
            }
        }


        function getParameterFromQuerystring(name) {
            var url = window.location.href;
            var name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
            if (!results) return '';
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

