"use strict";

console.log('\'Allo \'Allo!'); // Determine which hero-video to load depending on screen-size

var w = window.matchMedia('(max-width: 425px)');
var vid = document.getElementById('vid');
var source = document.createElement('source');
source.id = 'hvid';
source.setAttribute('type', 'video/mp4');
vid.appendChild(source);

if (w.matches) {
  vid.pause();
  source.removeAttribute('src');
  source.setAttribute('src', 'images/bomb-high.mp4');
  vid.load();
  vid.play();
} else {
  vid.pause();
  source.removeAttribute('src');
  source.setAttribute('src', 'images/bomb-wide.mp4');
  vid.load();
  vid.play();
}

window.addEventListener('resize', function () {
  var w = window.matchMedia('(max-width: 425px)');
  var vid = document.getElementById('vid');
  var source = document.getElementById('hvid');

  if (w.matches) {
    vid.pause();
    source.src = 'images/bomb-high.mp4';
    vid.load();
    vid.play();
  } else {
    vid.pause();
    source.src = 'images/bomb-wide.mp4';
    vid.load();
    vid.play();
  }
});
/*
document.querySelector(".color-change").onmouseover = function() {
  console.log("den fattar");
  function colorChange(){
    //Be sure to include <img id="coverImage" src="" alt=""/>
    var $myImage = $(".img-color");
    var colorThief = new ColorThief();

    //Grabs 8 swatch color palette from image and sets quality to 5 (0 =slow, 10=default/fast)
    var cp = colorThief.getPalette($myImage[0], 8, 5);

    //Sets background to 3rd color in the palette.
    $('body').css('background-color', 'rgb('+cp[2][0]+','+cp[2][1]+','+cp[2][2]+')');
  }

  $(document).ready(function() {
    //Make sure image is loaded before running.
    colorChange();
  });
};
*/

$(".color-change").hover(function () {
  console.log("hover");

  function colorChange() {
    //Be sure to include <img id="coverImage" src="" alt=""/>
    var $myImage = $(".img-color");
    var colorThief = new ColorThief(); //Grabs 8 swatch color palette from image and sets quality to 5 (0 =slow, 10=default/fast)

    var cp = colorThief.getPalette($myImage[0], 8, 5); //Sets background to 3rd color in the palette.

    $('body').css('background-color', 'rgb(' + cp[2][0] + ',' + cp[2][1] + ',' + cp[2][2] + ')');
  }

  $(document).ready(function () {
    //Make sure image is loaded before running.
    colorChange();
  });
}, function () {
  $('body').css('background-color', 'black');
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
