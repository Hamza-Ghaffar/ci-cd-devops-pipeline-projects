function page1() {
  var tl1 = gsap.timeline();
  var tl2 = gsap.timeline();
  var tl3 = gsap.timeline();
  tl1.from("nav h1 , nav a, nav button", {
    y: -30,
    duration: 0.5,
    delay: 0.1,
    opacity: 0,
    stagger: 0.15,
  });

  tl2.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
  });
  tl2.from(".center-part1 p", {
    x: -50,
    opacity: 0,
  });
  tl2.from(".center-part1 button", {
    opacity: 0,
    duration: 1,
    y: -300,
  });

  tl3.from(".center-part2 img", {
    opacity: 0,
    duration: 0.7,
    y: -300,
  });
  tl3.from(".section1bottom img", {
    opacity: 0,
    duration: 1.2,
    x: -300,
    stagger: 0.15,
  });
}

var tl_page2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".elem",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 60",
    scurb: 2,
  },
});

tl_page2.from(".elem", {
  opacity: 0,
  duration: 1.2,
  x: -300,
});

tl_page2.from(".elem img ", {
  opacity: 0,
  duration: 0.7,
  y: -300,
  stagger: 0.15,
});
