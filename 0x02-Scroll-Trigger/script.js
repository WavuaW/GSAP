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

    function populateGallery() {
        const imageContainers = document.querySelectorAll
        (".images");
        imageContainers.forEach((container) => {
            for (let i = 0; i < imagesPerProject; i++) {
                if (imageIndex > totalImages) imageIndex = 1;
                const imgContainer = document.createElement
                ("div");
                imgContainer.classList.add("img");

                const img = document.createElement("img");
                img.src = `./assets/img${imageIndex}.jpg`;
                img.alt = `Project Image ${imageIndex}`;
                imgContainer.appendChild(img);

                container.appendChild(imgContainer);
                imageIndex++;
            }
        });
    }

    splitTextIntoSpans(".mask h1");
    const imagesPerProject = 6;
    const totalImages = 50;
    let imageIndex = 1;
    populateGallery();
});