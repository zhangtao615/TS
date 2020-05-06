"use strict";
//exports.__esModule = true;
function parseError() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") > -1) {
        console.log("Firefox");
    }
    else if (userAgent.indexOf("Chrome") > -1) {
        console.log("Chrome");
    }
}
parseError();
//exports.parseError = parseError;
