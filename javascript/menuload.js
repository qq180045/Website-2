window.onload = function () {

    var x = document.getElementById("load");
    x.style.display = "none";

    waiting = true;
    window.setTimeout(function () {
        var x = document.getElementById("load");
        x.style.display = "flex";
    }, 0)

    waiting = true;
    window.setTimeout(function () {
        var x = document.getElementById("load");
        x.style.display = "none";
    }, 1500)

    waiting = true;
    window.setTimeout(function () {
        var x = document.getElementById("nav");
        x.style.display = "block";
    }, 700)

}