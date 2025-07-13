// Animate header links
gsap.from("nav ul li a", {
  duration: 1,
  y: -20,
  opacity: 0,
  stagger: 0.15,
  ease: "power3.out",
});

// Animate hero section text and button (only on home page)
if (document.querySelector(".hero")) {
  gsap.from(".hero h2", { duration: 1, y: 50, opacity: 0, ease: "bounce.out" });
  gsap.from(".hero p", { duration: 1, y: 50, opacity: 0, delay: 0.3 });
  gsap.from(".btn", { duration: 1, scale: 0, opacity: 0, delay: 0.6, ease: "back.out(1.7)" });
}

// Animate poem cards on poems page
const poems = document.querySelectorAll(".poem-card");
if (poems.length > 0) {
  gsap.from(poems, {
    duration: 1,
    opacity: 0,
    y: 40,
    stagger: 0.3,
    ease: "power2.out",
  });
}

// Animate contact form
const contactForm = document.querySelector("form");
if (contactForm) {
  gsap.from(contactForm, { duration: 1, y: 30, opacity: 0, ease: "power2.out" });
}
