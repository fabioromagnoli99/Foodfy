
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');



for(let card of cards) {
    card.addEventListener("click", function(){
        const imageId = card.getAttribute("id")
        const title = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = (`./assets/${imageId}.png`);
        modalOverlay.querySelector('.modal-content').innerHTML = card.innerHTML
    })
}

const closeModal = document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

