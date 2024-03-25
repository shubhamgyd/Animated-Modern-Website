const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"), // id
  smooth: true,
});

function firstPageAnim () {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
  .to(".boundingelem",{
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: .2
  })
}

function mincircleMouseFollower() {
  $(document.body).on("mousemove", function (dets) {
    /// console.log(dets.clientX, dets.clientY);
    $("#mincircle").css({
      transform: `translate(${dets.clientX}px, ${dets.clientY}px)`,
    });
  });
}

mincircleMouseFollower();
firstPageAnim();