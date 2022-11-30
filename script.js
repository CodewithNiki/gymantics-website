// header
const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("open");
  overlay.classList.toggle("open");
});

// ****Changing the theme ***
let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;
console.log(htmlElement);

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    smoothTrans();
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    smoothTrans();
    htmlElement.setAttribute("data-theme", "light");
  }
});

let smoothTrans = () => {
  htmlElement.classList.add("transition");

  window.setTimeout(() => {
    htmlElement.classList.remove("transition");
  }, 1000);
};

// Testimonial
const indicator = document.querySelectorAll(".img");
const slider = document.querySelectorAll(".testimonials__content--text");

for(let i=0; i<slider.length; i++){
  indicator[i].addEventListener("click",()=>{
    for(let j=0; j<slider.length; j++){
      slider[j].classList.remove("show");
      indicator[j].classList.remove("indicator");
    }
   slider[i].classList.add("show");
   indicator[i].classList.add("indicator");
  })
}

// Register section
const slidePage = document.querySelector(".register__content--form__page");
const firstNextBtn = document.querySelector(".next-1");
const secondNextBtn = document.querySelector(".next-2");
const thirdNextBtn = document.querySelector(".next-3");
const firstPrevBtn = document.querySelector(".prev-1");
const secondPrevBtn = document.querySelector(".prev-2");
const thirdPrevBtn = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progress = document.querySelectorAll(".register__progress--step");
const progressSpan = document.querySelectorAll(".register__progress--step span");
const progressIcon = document.querySelectorAll(".register__progress--step i");

let current = 1;

function tick(){
  progress[current - 1].classList.add("active");
  progressSpan[current - 1].classList.add("active");
  progressIcon[current - 1].classList.add("active");
  current += 1;
}

function untick(){
  progress[current - 2].classList.remove("active");
  progressSpan[current - 2].classList.remove("active");
  progressIcon[current - 2].classList.remove("active");
  current -= 1;
}

firstNextBtn.addEventListener("click", ()=>{
  slidePage.style.marginLeft = "-33%";
  tick();
});

firstPrevBtn.addEventListener("click", ()=>{
  slidePage.style.marginLeft = "0";
  untick();
})

secondPrevBtn.addEventListener("click", ()=>{
  slidePage.style.marginLeft = "-33%";
  untick();
})

secondNextBtn.addEventListener("click", ()=>{
  slidePage.style.marginLeft = "-100%";
  tick();
});

thirdNextBtn.addEventListener("click", ()=>{
  slidePage.style.marginLeft = "-200%";
  tick();
});

thirdPrevBtn.addEventListener("click", ()=>{
  slidePage.style.marginLeft = "-100%";
  untick();
});

submitBtn.addEventListener("click", ()=>{
  setTimeout(() => {
    alert("Your Form Has Been Successfully Submitted. Thank You!");
    location.reload();
  }, 1000);
});

// Scroll Section
const scroll = document.querySelector(".scroll");
window.addEventListener("scroll", ()=>{
  scroll.classList.toggle("active", window.scrollY > 200)
});

function scrollToTop(){
  window.scrollTo({
    top: 0,
    behaviour: "smooth"
  })
};

scroll.addEventListener("click",()=>{
  scrollToTop()
})