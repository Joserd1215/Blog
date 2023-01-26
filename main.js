let docTitle = document.title;
window.addEventListener("blur", () => {
document.title = "No te vayas :(";
})
window.addEventListener("focus", () => {
document.title = docTitle;
})