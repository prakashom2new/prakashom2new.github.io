"use strict";

document.addEventListener ('DOMContentLoaded', function () {
    var hamBtn = document.getElementsByClassName ("head__hambur-checkbox"),
        headSiz = document.getElementsByClassName ("head_siz");

    function hamClicked() {
        if (document.body.clientWidth < 900) {
            if (hamBtn[0].checked) {
                console.log ("checked");
                headSiz[0].style.height = "100%";
                headSiz[0].style.width = "auto";
            } else {
                console.log("nor");
                headSiz[0].style.height = "75px";
                headSiz[0].style.width = "75px";
            }
        }
    }
    
    hamBtn[0].addEventListener ('click', function () { hamClicked (); });
});