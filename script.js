
  // WELCOME POPUP


const popup = document.getElementById("popup");
const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
  enterBtn.addEventListener("click", () => {
    popup.style.opacity = "0";
    popup.style.transform = "scale(1.1)";

    setTimeout(() => {
      popup.style.display = "none";
      document.body.style.overflowY = "auto";
    }, 500);
  });
}

document.body.style.overflow = "hidden";



  // TYPING EFFECT


const typing = document.getElementById("typing");

const words = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "BCA Student",
  "Frontend Developer",
  "Java Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typing.textContent = currentWord.substring(0, charIndex++);

    if (charIndex > currentWord.length) {

      deleting = true;

      setTimeout(typeEffect, 1200);

      return;

    }

  } else {

    typing.textContent = currentWord.substring(0, charIndex--);

    if (charIndex < 0) {

      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {

        wordIndex = 0;

      }

    }

  }

  setTimeout(typeEffect, deleting ? 50 : 100);

}

if (typing) {

  typeEffect();

}


  // MOBILE MENU


const menu = document.querySelector(".menu");
const nav = document.querySelector("nav ul");

if (menu && nav) {

  menu.onclick = () => {

    nav.classList.toggle("show");

  };

}



  // CLOSE MENU AFTER CLICK


document.querySelectorAll("nav ul li a").forEach(link => {

  link.onclick = () => {

    if (nav) {

      nav.classList.remove("show");

    }

  };

});



  // SMOOTH SCROLL


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({

        behavior: "smooth"

      });

    }

  });

});


  // SCROLL REVEAL


const revealElements = document.querySelectorAll(
  ".about,.skill-box,.card,.service,#contact,footer"
);

function reveal() {

  revealElements.forEach(el => {

    const windowHeight = window.innerHeight;

    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 120) {

      el.classList.add("active");

    }

  });

}

window.addEventListener("scroll", reveal);

reveal();



  // ACTIVE NAV LINK


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");

    }

  });

});



  // NAVBAR SCROLL EFFECT


const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background = "rgba(0,0,0,.85)";
    header.style.backdropFilter = "blur(15px)";

  } else {

    header.style.background = "transparent";

  }

});



  // SCROLL PROGRESS BAR


const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#39ff14";
progress.style.width = "0%";
progress.style.zIndex = "999999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

  const scroll = document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  progress.style.width = (scroll / height) * 100 + "%";

});



  // BUTTON RIPPLE EFFECT


document.querySelectorAll("button").forEach(button => {

  button.addEventListener("click", function(e) {

    const circle = document.createElement("span");

    const size = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = size + "px";

    circle.style.left = e.offsetX - size / 2 + "px";

    circle.style.top = e.offsetY - size / 2 + "px";

    circle.style.position = "absolute";

    circle.style.borderRadius = "50%";

    circle.style.background = "rgba(255,255,255,.4)";

    circle.style.transform = "scale(0)";

    circle.style.animation = "ripple .6s linear";

    circle.style.pointerEvents = "none";

    this.appendChild(circle);

    setTimeout(() => {

      circle.remove();

    }, 600);

  });

});



  // t.createElement("style");

style.innerHTML = `

button{

position:relative;

overflow:hidden;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

.active{

color:#39ff14 !important;

}

.active::after{

width:100% !important;

}

`;

document.head.appendChild(style);



  // AUTO YEAR


const footer = document.querySelector("footer p");

if (footer) {

  footer.innerHTML =
    "© " +
    new Date().getFullYear() +
    " Lucky Vishwakarma • Made with ❤️ by Coders World";

}