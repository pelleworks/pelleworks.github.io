"use strict";

console.log('\'Allo \'Allo!');

function iconChange() {
  setTimeout(function () {
    document.getElementById("icon").href = "images/favicon/favicon1.png";
  }, 500);
  setTimeout(function () {
    document.getElementById("icon").href = "images/favicon/favicon2.png";
  }, 1000);
  setTimeout(function () {
    document.getElementById("icon").href = "images/favicon/favicon3.png";
  }, 1500);
  setTimeout(function () {
    document.getElementById("icon").href = "images/favicon/favicon4.png";
  }, 2000);
}

window.onload = function () {
  setInterval(function () {
    iconChange();
  }, 2000);
}; // ******* CHANGE COLOR ON HOVER *********
//
// //REIN
// $('.rein').hover(
//   function () {
//     console.log('hover');
//     $('body').css('background-color', '#AF1105');
//   },
//   function () {
//     $('body').css('background-color', 'black');
//   }
// );
//
// //TRISS
// $('.triss').hover(
//   function () {
//     console.log('hover');
//     $('body').css('background-color', '#D8D8D8');
//   },
//   function () {
//     $('body').css('background-color', 'black');
//   }
// );
//
// //SODASTREAM
// $('.sodastream').hover(
//   function () {
//     console.log('hover');
//     $('body').css('background-color', '#9C6AB2');
//   },
//   function () {
//     $('body').css('background-color', 'black');
//   }
// );
//
// //SMYCKA
// $('.smycka').hover(
//   function () {
//     console.log('hover');
//     $('body').css('background-color', '#C8A973');
//   },
//   function () {
//     $('body').css('background-color', 'black');
//   }
// );
// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });
// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
//# sourceMappingURL=main.js.map
