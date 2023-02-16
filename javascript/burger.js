function burger(x) {
  x.classList.toggle("change");

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
        x.style.display = "none";
    }, 600)

    waiting = true;
    window.setTimeout(function () {
        var x = document.getElementById("nav");
        x.style.display = "block";
    }, 400)

    window.location.href = "menu.html";

}