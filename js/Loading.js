window.addEventListener("load", () => {
    const laoder = document.querySelector(".loader");

    laoder.classList.add("loader-hidden");

    laoder.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})