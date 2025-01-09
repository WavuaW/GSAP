document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 750);
    });
    gsap.ticker.lagSmoothing(0);

    function splitTextIntoSpans(selector) {
        const elements = document.querySelectorAll
        (selector);
        elements.forEach((element) => {
            const [firstDigit, secondDigit] = element.innerText;
            element.innerHTML = `
            <div class="digit-wrapper">
                <span class="first">${firstDigit}</span>
                <span class="second">${secondDigit}</span>
            </div>
            `;
        });
    }
});