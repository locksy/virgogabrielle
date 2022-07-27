// define variables
const content = document.getElementsByClassName("contentContainer");
contentArray = Array.prototype.slice.call(content); // convert HTMLCollection to Array

// init scrollmagic
const ctrl = new ScrollMagic.Controller();

contentArray.map(i => {
  let target1 = i.children[0];
  let target2 = i.children[1];
  var tl = new TimelineMax();
  tl.fromTo(target1, 0.5, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 }, 0.3)
    .fromTo(target2, 0.5, { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: -100 }, "-=0.2");

  new ScrollMagic.Scene({
    triggerElement: i,
    triggerHook: 0.5,
  })
  .setTween(tl)
  .addTo(ctrl)
});

// add lactive to nav on scroll using jquery
$(document).scroll(function () {
  var scrollPos = $(document).scrollTop() + 100;
  $('nav ul li a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    console.log(refElement);
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('nav ul li a').removeClass("active");
      currLink.addClass("active");
    }
  });
});