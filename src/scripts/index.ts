import "../styles/index.scss"

window.addEventListener("load", () => {

    // simulate page loading
    setTimeout(() => {
        init();
    }, 200);
});

const init = () => {
    (document.querySelector(".page-loading")! as HTMLElement).style.display = "none";
    (document.querySelector(".page-content")! as HTMLElement).style.display = "block";
}