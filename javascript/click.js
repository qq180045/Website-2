function clickVanish() {

    waiting = true;
    window.setTimeout(function () {
        var x = document.getElementById("vanish1");
        x.style.display = "none";
    }, 800)

    var x = document.getElementById("load");
    x.style.display = "flex";

    waiting = true;
    window.setTimeout(function () {
        var x = document.getElementById("load");
        x.style.display = "none";
    }, 1500)

    waiting = true;
    window.setTimeout(function () {
        var x = document.getElementById("unhide");
        x.style.display = "block";
    }, 500)
}