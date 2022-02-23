
// BTN CATALOG TOGGLE
const btnToggleCatalog = document.querySelector(".catalog-toggler-btn");
const catalogNav = document.querySelector(".catalog-toggler-nav");

// BTN CATALOG ACTION
btnToggleCatalog.addEventListener("click", clickBtnCatalog);
function clickBtnCatalog(evt){
  btnToggleCatalog.classList.toggle("active");
}

// SLIDER
const btnSliderPrev = document.querySelector(".slider-btn-prev");
const btnSliderNext = document.querySelector(".slider-btn-next");
const slides = document.querySelectorAll(".slide");
const sliderCounter = document.querySelector(".slider-counter");
const btnSliderPagination = document.querySelectorAll(".slider-pagination-btn");

/* Index of the current element */
function getActiveSlideIndex() {
  for(let i=0;i<slides.length;i++){
if (slides[i].classList.contains("slide--show")){
 return i;
}
}}

/*Show the following slide*/
btnSliderNext.addEventListener("click", nextSlide);
function nextSlide() {
  setSlide(getActiveSlideIndex() + 1);
}

/*Show the previous slide*/
btnSliderPrev.addEventListener("click", previousSlide);
function previousSlide() {
  setSlide(getActiveSlideIndex() - 1);
}

/* Swipe btns*/
btnSliderPagination.forEach((element, index) => {
  element.addEventListener("click", () => {
    setSlide(index);
    });
 })

/*Choosing the next slide*/
function setSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  setActiveSlideElement();
  updateSlideText();
  setActiveSlideDot();
}

/*Changes the text of the slide сounter*/
function updateSlideText(){
sliderCounter.innerText = "0" + (slideIndex +1);
}

/*Chooses the active dot of the slider*/
function setActiveSlideDot(){
 for (let btn of btnSliderPagination) {
    btn.classList.remove("slider-pagination-btn--current");
  }
  btnSliderPagination[slideIndex].classList.add("slider-pagination-btn--current");
}
/*Chooses an active slide*/
function setActiveSlideElement(){
  for (let slide of slides) {
      slide.classList.remove("slide--show");
  }
  slides[slideIndex].classList.add("slide--show");
}


// SERVICES
const serviceItem = document.querySelectorAll(".services-nav-item");
const serviceBtn = document.querySelectorAll(".services-nav-btn");
const serviceDesc = document.querySelectorAll(".services-desc-item");

/*Choosing the next item*/
function showService(n) {
  serviceIndex = (n + serviceItem.length) % serviceItem.length;
  setActiveServiceItem();
setActiveServiceBtn();
}
/*Chooses an active item*/
function setActiveServiceItem(){
  for (let desc of serviceDesc) {
    desc.classList.remove("service--show");
}
serviceDesc[serviceIndex].classList.add("service--show");
}
/*Chooses an active btn*/
function setActiveServiceBtn(){
for (let service of serviceItem) {
    service.classList.remove("services-nav-item--active");
}
serviceItem[serviceIndex].classList.add("services-nav-item--active");
}
/* Swipe btns*/
serviceBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    showService(index);
    });
 })

 // POPUP
 const btnDelivery = document.querySelector(".delivery");
 const popup = document.querySelector(".modal");
 const popupClose = document.querySelector(".modal-btn-close");
 const body = document.querySelector("body");

 btnDelivery.addEventListener("click",togglePopup);
 popupClose.addEventListener("click",togglePopup);

 function togglePopup(){
  popup.classList.toggle("open");
  body.classList.toggle("lock");
 }
 popup.addEventListener("click", function(evt){
  if (!evt.target.closest(".modal-content")){
    body.classList.toggle("lock");
   popup.classList.toggle("open");
 }});

  // POPUP COUNTER
    const quantityMinus = document.querySelector(".number-product-minus");
    const quantityPlus = document.querySelector(".number-product-plus");
    const quantityNum = document.querySelector(".modal-input-number");

    let number = 0;

    quantityPlus.addEventListener("click", valuePlus);
    quantityMinus.addEventListener("click", valueMinus);
    function valuePlus(){
      // limit the quantity of goods
      if (number <= 4) {
          number++;
          quantityNum.value = number;
      }
  }

    function valueMinus()  {
       if (number >= 2) {
         number--;
         quantityNum.value = number;
      }
  };


