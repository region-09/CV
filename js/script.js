document.addEventListener("DOMContentLoaded", function (event) {
    var dataText = [ "Welcome!!!.."];

    function type(text, i, fn_call_back) {
        if (i < (text.length)) {
            document.querySelector("h1").innerHTML =
                text.substring(0, i + 1);
            setTimeout(function () {
                type(text, i + 1, fn_call_back);
            }, 500);
        }
        else if (typeof fn_call_back == 'function') {
            setTimeout(fn_call_back, 700);
        }
    }
    function start_text_animation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                start_text_animation(0);
            }, 20000);
        }
        if (i < dataText[i].length) {
            type(dataText[i], 0, function () {
                start_text_animation(i + 1);
            });
        }
    }
    start_text_animation(0);
});
