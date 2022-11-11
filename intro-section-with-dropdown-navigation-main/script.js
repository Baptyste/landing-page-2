const menu = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");
const topPage = document.querySelector(".top-page");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const arrow = document.querySelector(".svg");

const question2 = document.querySelector(".question2");
const answer2 = document.querySelector(".answer2");
const arrow2 = document.querySelector(".svg2");

const question3 = document.querySelector(".question3");
const answer3 = document.querySelector(".answer3");
const arrow3 = document.querySelector(".svg3");

const question4 = document.querySelector(".question4");
const answer4 = document.querySelector(".answer4");
const arrow4 = document.querySelector(".svg4");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  nav.style.display = "block";
});

close.addEventListener("click", () => {
  nav.classList.remove("active");
  nav.style.display = "none";
});

question.addEventListener("click", () => {
  answer.classList.toggle("active");
  arrow.classList.toggle("rotate");
});

question2.addEventListener("click", () => {
  answer2.classList.toggle("active2");
  arrow2.classList.toggle("rotate");
});

question3.addEventListener("click", () => {
  answer3.classList.toggle("active3");
  arrow3.classList.toggle("rotates");
});

question4.addEventListener("click", () => {
  answer4.classList.toggle("active4");
  arrow4.classList.toggle("rotates");
});
