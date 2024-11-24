document.addEventListener("DOMContentLoaded", function () {
  const progressCircles = document.querySelectorAll(".circular-progress");
  const skillsSection = document.querySelector(".our-skills");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressCircles.forEach((circle) => {
            circle.classList.remove("inactive"); // Remove inactive
            circle.classList.add("active"); // Add active
          });
        }
      });
    },
    { threshold: 0.5 }
  ); // Trigger when 50% of the section is visible

  observer.observe(skillsSection);
});
