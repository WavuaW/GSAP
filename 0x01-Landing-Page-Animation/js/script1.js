// Text animation using Anime.js
let textWrapper = document.querySelector(".title");
anime.timeline().add({
  targets: ".title .letter",
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 4800 + 40 * i,
});

// GSAP animations replacing TweenMax

// Animate the .box element
gsap.to(".box", {
  y: "-100%",
  duration: 2.4,
  ease: "expo.inOut",
  delay: 1
});

// Animate img scaling
gsap.from("img", {
  scale: 2,
  duration: 4,
  ease: "expo.inOut",
  delay: 0
});

// Animate wrapper-img size change
gsap.to(".wrapper-img", {
  width: 400,
  height: 500,
  duration: 2.4,
  ease: "expo.inOut",
  delay: 3.5
});

// Animate img opacity
gsap.from(".img", {
  opacity: 0,
  duration: 0.4,
  ease: "expo.inOut",
  delay: 3.4
});

// Animate the .left element
gsap.to(".left", {
  x: -400,
  rotation: -10,
  duration: 2,
  ease: "expo.inOut",
  delay: 3.8
});

// Animate the .right element
gsap.to(".right", {
  x: 100,
  rotation: 10,
  duration: 2,
  ease: "expo.inOut",
  delay: 3.8
});

// Staggered animation for menu and hero-container elements
gsap.from("menu > div, .hero-container > div", {
  opacity: 0,
  y: 30,
  duration: 2,
  ease: "expo.inOut",
  delay: 4.2,
  stagger: 0.1
});
