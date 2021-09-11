new Typed("#typed", {
  strings: ["Student", "Learner", "Tech-Enthusiast"],
  typeSpeed: 100,
  delaySpeed: 100,
  delay: 200,
  loop: true,
});

// Aos Library
AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 150, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
});

//dark mode setting

const bigName = document.getElementById("head");
const navBar = document.getElementById("nav-bar");
const aboutMe1 = document.getElementById("aboutme1");
const aboutMe2 = document.getElementById("aboutme2");
const project = document.getElementById("project-1");
const darkMode = document.getElementById("dark");
const lightMode = document.getElementById("light");
const boxOne = document.getElementById("1-box");
const boxTwo = document.getElementById("2-box");
const fooTer = document.getElementById("foot")

let dark = () => {
  bigName.className = "big-name-black";
  navBar.className = "nav-bar-black";
  aboutMe1.className = "about-name-black"
  aboutMe2.className = "about-section-black"
  project.className = "big-name-2-black"
  boxOne.className = "card-black"
  boxTwo.className = "card-black"
  fooTer.className = "footer-black"
  darkMode.style.display = "none";
  lightMode.style.display = "block";
};

let light = () => {
  bigName.className = "big-name";
  navBar.className = "nav-bar";
  aboutMe1.className = "about-name-light"
  aboutMe2.className = "about-section-light"
  project.className = "big-name-2-light"
  boxOne.className = "first-card-light"
  boxTwo.className = "first-card-light"
  fooTer.className = "footer-light"
  darkMode.style.display = "block";
  lightMode.style.display = "none";
};
