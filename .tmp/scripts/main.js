console.log('\'Allo \'Allo!'); // Determine which hero-video to load depending on screen-size

var w = window.matchMedia("(max-width: 425px)");
var vid = document.getElementById("vid");
var source = document.createElement("source");
source.id = "hvid";
source.setAttribute("type", "video/mp4");
vid.appendChild(source);

if (w.matches) {
  vid.pause();
  source.removeAttribute("src");
  source.setAttribute("src", "images/bomb-high.mp4");
  vid.load();
  vid.play();
} else {
  vid.pause();
  source.removeAttribute("src");
  source.setAttribute("src", "images/bomb-wide.mp4");
  vid.load();
  vid.play();
}

window.addEventListener("resize", function () {
  var w = window.matchMedia("(max-width: 425px)");
  var vid = document.getElementById("vid");
  var source = document.getElementById("hvid");

  if (w.matches) {
    vid.pause();
    source.src = "images/bomb-high.mp4";
    vid.load();
    vid.play();
  } else {
    vid.pause();
    source.src = "images/bomb-wide.mp4";
    vid.load();
    vid.play();
  }
}); // fade in video after loading

/*
var e = document.getElementById("vid");
e.style.opacity = 0;

var vid = document.getElementById("vid");
vid.oncanplaythrough = function() {
    setTimeout(function() {
        var e = document.getElementById('vid');
        fade(e);
    }, 5000);
};

function fade(element) {
    var op = 0;
    var timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
    }, 50);
}
*/
// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });
// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
//# sourceMappingURL=main.js.map
