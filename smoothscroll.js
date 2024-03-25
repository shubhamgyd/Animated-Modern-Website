const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"), // id
  smooth: true,
});

function mincircleMouseFollower() {
  $(document.body).on("mousemove", function (dets) {
    /// console.log(dets.clientX, dets.clientY);
    $("#mincircle").css({
      transform: `translate(${dets.clientX}px, ${dets.clientY}px)`,
    });
  });
}

mincircleMouseFollower();
