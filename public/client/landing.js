//nav bar
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  });
});
//gsap
gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline()
  .from("#title", {
    scale: 0,
    opacity: 0,
    duration: 2,
  })
  .from("#hero-dep", { scale: 0, opacity: 0, duration: 2 }, "-=1")
  .to("#boom", { duration: 3, x: "60vw", ease: "back(2)" })
  .to("#boom", { y: "-10vh", duration: 2 })
  .to("#boom", { x: "30vw", duration: 3 }, "-=2")
  .to("#hinge", { duration: 1, rotation: 50 }, "-=4")
  .to("#hinge", { y: "200vh", duration: 1 }, "-=3")
  .to("#hinge", { display: "none" }, "-=2");

// gsap.from(".AA", {
//   duration: 8,
//   x: "-700px",
//   scrollTrigger: {
//     trigger: ".AA",
//     scroller: "#scrollsnap",
//     toggleActions: "play none none reset",
//   },
// });

//1 about
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#ah1",
      scroller: "#scrollsnap",
      scrub: 1,
      start: "top bottom",
      end: "top 25%",
    },
  })
  .from("#ah1", {
    duration: 3,
    x: "-300px",
  })
  .from(
    "#ap1",
    {
      duration: 3,
      scale: 0,
      opacity: 0,
    },
    "-=1"
  );

//2 about
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#ah2",
      scroller: "#scrollsnap",
      scrub: 1,
      start: "top bottom",
      end: "top 25%",
    },
  })
  .from("#ah2", {
    duration: 3,
    x: "-300px",
  })
  .from(
    "#ap2",
    {
      duration: 3,
      scale: 0,
      opacity: 0,
    },
    "-=1"
  );

//3 about
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#ah3",
      scroller: "#scrollsnap",
      scrub: 1,
      start: "top bottom",
      end: "top 25%",
    },
  })
  .from("#ah3", {
    duration: 3,
    x: "-300px",
  })
  .from(
    "#ap3",
    {
      duration: 3,
      scale: 0,
      opacity: 0,
    },
    "-=1"
  );
