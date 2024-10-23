let textWrapper = document.querySelector(".title");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//     /\S/g,
//     "<span class='letter'>&&</span>"
// );

const tl = gsap.timeline();

anime.timeline().add({
    targets: ".title .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 4800 + 40 * i,
});

gsap.to(".box", {
    y: "-100%", 
    ease: "expo.InOut", 
    duration: 2.4,
    delay: 1
});

gsap.from("img", {
    scale: "2",
    duration: 4,
    ease:"expo.InOut", 
    delay: 0
});

gsap.to(".wrapper-img", {
    width: "400",
    height: "500",
    ease: "expo.InOut",
    delay: 3.5
});

gsap.from(".img", {
    opacity: 0,
    duration: 0.4,
    ease: "expo.InOut",
    delay: 3.4
});

gsap.to(".left", {
    x: -400,
    rotation: -10,
    duration: 2,
    ease: "expo.InOut",
    delay: 3.8
});

gsap.to(".right", {
    x: "100",
    rotation: 10,
    duration: 2,
    ease: "expo.InOut",
    delay: 3.8
});

gsap.from( "menu > div, .hero-container > div", {
        opacity: 0,
        y: 30,
        duration: 2,
        ease: "expo.InOut",
        delay: 4.2,
        stagger: 0.1
    }
);