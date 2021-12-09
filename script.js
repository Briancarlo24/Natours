const btnHeader = document.getElementById("btn--header");
const btnNav = document.querySelector(".navigation__button");

const sectionTour = document.getElementById("section-tours");
const navBg = document.querySelector(".navigation__background");
const navNav = document.querySelector(".navigation__nav");

// Icon Animation
const icon1 = document.querySelector(".navigation__icon--1");
const icon2 = document.querySelector(".navigation__icon--2");
const icon3 = document.querySelector(".navigation__icon--3");

// functions
btnNav.addEventListener("click", function () {
  navBg.classList.toggle("nav__bg-display");
  navNav.classList.toggle("nav__display");
  icon1.classList.toggle("icon-1");
  icon2.classList.toggle("icon-2");
  icon3.classList.toggle("icon-3");
});

btnHeader.addEventListener("click", function (e) {
  sectionTour.scrollIntoView({ behavior: "smooth" });
});

// Add Anchor to the Navigation Links
document
  .querySelector(".navigation__list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    navBg.classList.toggle("nav__bg-display");
    navNav.classList.toggle("nav__display");
    // document
    //   .querySelector(".navigation__nav")
    //   .classList.toggle("nav__bg-display nav__display");
    // Matching strategy
    if (e.target.classList.contains("navigation__link")) {
      // console.log('contains nav__link');
      const id = e.target.getAttribute("href"); // returns #section--1/2/3
      const myClass = e.target.getAttribute("class");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      icon1.classList.toggle("icon-1");
      icon2.classList.toggle("icon-2");
      icon3.classList.toggle("icon-3");
    }
  });
