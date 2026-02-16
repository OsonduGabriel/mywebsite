const backToTop = document.querySelector(".back_to_top")
const whatsapp = document.querySelector(".whatsapp_float")
const cvBtn = document.querySelector(".btn_cv")
const hireBtn = document.querySelector(".btn_hire")
const modal = document.getElementById("hireModal") //modal overlay ID
const closeBtn = document.querySelector(".close_modal")
const hireForm = document.querySelector(".hireForm")

//========= Back to Top ============
//backToTop button should be visible when scrolled up to window Y 500px
window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        backToTop.style.opacity = "1"
        backToTop.style.visibility = "visible"
    } else{
        backToTop.style.opacity = "0"
        backToTop.style.visibility = "hidden"
    }
})

// ======== Download CV =========
cvBtn.addEventListener("click", () => {
    window.location.href = "assets/Gabriel_CV.pdf"  //download cv
})


//========= Modal pop-up window ===========
//open modal  when hire me button is clicked

if(hireBtn){
    hireBtn.addEventListener("click", () => {
        modal.classList.add("active") //open modal by attaching class active which was created in css
        document.body.style.overflow = "hidden" //prevent scrolling of body
    })
}

//close modal function
function closeModal(){
    modal.classList.remove("active") //remove class active
    document.body.style.overflow = ''
}

closeBtn.addEventListener("click", closeModal) //close modal with button

//click outside content to close modal
modal.addEventListener("click", (event) => {
    if(event.target === modal){
        closeModal()
    }
})

//ESC key closes modal
document.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        closeModal()
    }
})

// timer for whatsapp pulse animation = 8s
setTimeout(() => {
    whatsapp.classList.remove("pulsewa")
}, 8000
)