document.addEventListener("DOMContentLoaded"., () => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 750);
    });
    gsap.ticker.lagSmoothing(0);
});