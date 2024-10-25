// let textWrapper = document.querySelector(".title");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//     /\&/g,
//     "<span class='letter'>&</span>"
// );

// const tl = gsap.timeline();

// anime.timeline().add({
//     targets: ".title .letter",
//     translateY: [100, 0],
//     translateZ: 0,
//     opacity: [0, 1],
//     ease: "power1.InOut",
//     duration: 2000,
//     delay: (el, i) => 4800 + 40 * i,
// });

document.addEventListener("DOMContentLoaded", () => {

    function splitTextIntoSpans(selector) {
        let elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
            .split("")
            .map(function (char) {
            return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
            })
            .join("");
        element.innerHTML = splitText;
        
        });
    }

        splitTextIntoSpans(".header .title")

    // console.log(splitText);

        gsap.to(".header .title span", {
            y: 0,
            stagger: 0.1,
            duration: 2,
            ease: "expo.inOut",
            delay: 0.75
        });
    });


gsap.to(".box", {
    y: "-100vh", 
    ease: "expo.easeInOut", 
    duration: 2.4,
    delay: 1,
});

gsap.from("img", {
    scale: "2",
    duration: 4,
    ease:"expo.easeInOut", 
    delay: 0
});

gsap.to(".wrapper-img", {
    width: "400px",
    height: "500px",
    ease: "power2.inOut",
    delay: 3.5
});

gsap.from(".img", {
    opacity: 0,
    duration: 0.4,
    ease: "power2.inOut",
    delay: 3.4
});

gsap.to(".left", {
    x: -400,
    rotation: -10,
    duration: 2,
    ease: "power4.inOut",
    delay: 3.8
});

gsap.to(".right", {
    x: 400,
    rotation: 10,
    duration: 2,
    ease: "power4.inOut",
    delay: 3.8
});

gsap.from( ".menu > div, .hero-container > div", {
        opacity: 0,
        y: 30,
        duration: 2,
        ease: "power2.inOut",
        delay: 4.2,
        stagger: 0.1
});