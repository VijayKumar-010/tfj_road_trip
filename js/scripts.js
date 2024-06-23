document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const options = { threshold: 0.5 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Smooth scroll for mobile users
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
});

function showInfo(id) {
  document
    .querySelectorAll(".info")
    .forEach((info) => info.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Function to toggle visibility of sections
function toggleInfo(id) {
  var info = document.getElementById(id);
  if (info.classList.contains("hidden")) {
    // Hide all other info sections
    document.querySelectorAll(".info").forEach(function (el) {
      el.classList.add("hidden");
    });
    // Show the clicked info section
    info.classList.remove("hidden");
  } else {
    // Toggle off if already shown
    info.classList.add("hidden");
  }
}

// Document ready function
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.5,
  };

  // Intersection observer to add visible class to sections
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Smooth scroll for mobile users
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
