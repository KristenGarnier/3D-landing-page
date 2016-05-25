var smoothScroll = require('smooth-scroll');

document.querySelector('#contact').addEventListener('click', function (e) {
  document.querySelector('#contact iframe').style.pointerEvents = 'auto';
}, false);

smoothScroll.init();