console.log('\'Allo \'Allo!');

// ******* CHANGE COLOR ON HOVER *********

//REIN
$('.rein').hover(
  function () {
    console.log('hover');
    $('body').css('background-color', '#AF1105');
  },
  function () {
    $('body').css('background-color', 'black');
  }
);

//TRISS
$('.triss').hover(
  function () {
    console.log('hover');
    $('body').css('background-color', '#D8D8D8');
  },
  function () {
    $('body').css('background-color', 'black');
  }
);

//SODASTREAM
$('.sodastream').hover(
  function () {
    console.log('hover');
    $('body').css('background-color', '#9C6AB2');
  },
  function () {
    $('body').css('background-color', 'black');
  }
);

//SMYCKA
$('.smycka').hover(
  function () {
    console.log('hover');
    $('body').css('background-color', '#C8A973');
  },
  function () {
    $('body').css('background-color', 'black');
  }
);

// Write on write woff
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

    };

    // Determine which hero-video to load depending on screen-size
    //   var w = window.matchMedia('(max-width: 425px)');
    //   var vid = document.getElementById('vid');
    //   var source = document.createElement('source');
    //   source.id = 'hvid';
    //   source.setAttribute('type', 'video/mp4');
    //   vid.appendChild(source);
    //
    //   if (w.matches) {
    //     vid.pause();
    //     source.removeAttribute('src');
    //     source.setAttribute('src', 'images/bomb-high.mp4');
    //     vid.load();
    //     vid.play();
    //   } else {
    //     vid.pause();
    //     source.removeAttribute('src');
    //     source.setAttribute('src', 'images/bomb-wide.mp4');
    //     vid.load();
    //     vid.play();
    //   }
    //
    // window.addEventListener('resize', function(){
    //   var w = window.matchMedia('(max-width: 425px)');
    //   var vid = document.getElementById('vid');
    //   var source = document.getElementById('hvid');
    //
    //   if (w.matches) {
    //     vid.pause();
    //     source.src = 'images/bomb-high.mp4';
    //     vid.load();
    //     vid.play();
    //   } else {
    //     vid.pause();
    //     source.src = 'images/bomb-wide.mp4';
    //     vid.load();
    //     vid.play();
    //   }
    // });

//
// $('.color-change').hover(
//
//   function () {
//     console.log('hover');
//     function colorChange(){
//       //Be sure to include <img id="coverImage" src="" alt=""/>
//       var $myImage = $('.img-color');
//       var colorThief = new ColorThief();
//
//       //Grabs 8 swatch color palette from image and sets quality to 5 (0 =slow, 10=default/fast)
//       var cp = colorThief.getPalette($myImage[0], 8, 5);
//
//       //Sets background to 3rd color in the palette.
//       $('body').css('background-color', 'rgb('+cp[2][0]+','+cp[2][1]+','+cp[2][2]+')');
//     }
//
//     $(document).ready(function() {
//       //Make sure image is loaded before running.
//       colorChange();
//     });
//   },
//   function () {
//     $('body').css('background-color', 'black');
//   }
// );
// .color-change class is for the <a> .img-color is for the <img>






// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
