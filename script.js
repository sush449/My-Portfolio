const roles = ["Student", "Web Developer", "Designer", "Learner"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex++);
  }

  let speed = isDeleting ? 80 : 120;

  if (!isDeleting && charIndex === currentRole.length + 1) {
    isDeleting = true;
    speed = 1000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();