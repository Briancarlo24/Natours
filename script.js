const btnHeader = document.getElementById("btn--header");
const btnNav = document.querySelector(".navigation__button");

const sectionTour = document.getElementById("section-tours");
const navBg = document.querySelector(".navigation__background");
const navNav = document.querySelector(".navigation__nav");

// functions
btnNav.addEventListener("click", function () {
  navBg.classList.toggle("nav__bg-display");
  navNav.classList.toggle("nav__display");
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
    }
  });
