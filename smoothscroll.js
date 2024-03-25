const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'), // id
  smooth: true
});

function mincircleMouseFollower () {
  window.addEventListener("mousemove", function(dets) {
    // console.log(dets.clientX, dets.clientY);
    this.document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
  })
}

mincircleMouseFollower();