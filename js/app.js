const teamCards = document.querySelectorAll(".team__card");
const teamModals = document.querySelectorAll(".team__modal");

for (let i = 0; i < teamCards.length; i++) {
  teamCards[i].addEventListener("click", () => {
    teamCards[i].nextElementSibling.classList.remove("team__modal-hidden");
    document.body.style.overflow = "hidden";
  });
}

for (let i = 0; i < teamModals.length; i++) {
  teamModals[i].addEventListener("click", () => {
    teamModals[i].classList.add("team__modal-hidden");
    document.body.style.overflow = "auto";
  });
}


const burgerBtn = document.querySelector('.hamburger')
burgerBtn.addEventListener('click',()=>{
 const verticalBtn = document.querySelector('.vertical')
  verticalBtn.classList.toggle('hidden')
})