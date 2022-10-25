// document.getElementById("h").innerHTML += "jyufuh
// window.onload = () => {
//   setTimeout(() => {
//     document
//       .getElementById("hinge")
//       .classList.add("animate__animated", "animate__hinge");
//   }, 5000);
// };

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
    // scrollTrigger: {
    //   trigger: "#title",
    //   pin: true,
    //   scrub: true,
    // },
    scale: 0,
    opacity: 0,
    duration: 2,
  })
  .from("#hero-dep", { scale: 0, opacity: 0, duration: 2 }, "-=1")
  .to("#boom", { duration: 3, x: "60vw", ease: "back(2)" })
  .to("#boom", { y: "-10vh", duration: 2 })
  .to("#boom", { x: "30vw", duration: 3 }, "-=1")
  .to("#hinge", { duration: 2, rotation: 60 }, "-=2")
  .to("#hinge", { y: "60vh", duration: 1 }, "-=1")
  .to("#hinge", { display: "none" });
