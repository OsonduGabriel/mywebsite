const backToTop = document.querySelector(".back_to_top")

window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        backToTop.style.opacity = "1"
        backToTop.style.visibility = "visible"
    } else{
        backToTop.style.opacity = "0"
        backToTop.style.visibility = "hidden"
    }
})