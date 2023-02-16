window.onload = function () {

    var x = document.getElementById("load");
    x.style.display = "none";

    var x = document.getElementById("content");
    x.style.display = "none";

    var x = document.getElementById("burger");
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
        var x = document.getElementById("content");
        x.style.display = "block";
    }, 1000)

    waiting = true;
    window.setTimeout(function () {
        var x = document.getElementById("wall");
        x.style.display = "block";
    }, 1000)

    waiting = true;
    window.setTimeout(function () {
        var x = document.getElementById("button");
        x.style.display = "block";
    }, 1000)

    waiting = true;
    window.setTimeout(function () {
        var x = document.getElementById("burger");
        x.style.display = "block";
    }, 1000)


}

