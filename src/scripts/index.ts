import "../styles/index.scss"

window.addEventListener("load", () => {

    // simulate page loading
    setTimeout(() => {
        init();
    }, 200);
});

const init = () => {
    (document.querySelector(".page-loading")! as HTMLElement).classList.add("hidden");
    (document.querySelector(".page-content")! as HTMLElement).classList.remove("hidden");
}