console.log("********Intersection Observer**********");

document.addEventListener("DOMContentLoaded", () => {
    let observer = new IntersectionObserver((entries) => {
        console.log(entries[0].isIntersecting);
    });

    observer.observe(document.querySelector(".premium"));
})