document.addEventListener("DOMContentLoaded", function () {
    const coversSection = document.querySelector(".covers");
    const marqueeLines = document.querySelectorAll(".marquee__line");
  
    if (coversSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              marqueeLines.forEach((line) => {
                line.style.animationPlayState = "running";
              });
            } else {
              marqueeLines.forEach((line) => {
                line.style.animationPlayState = "paused";
              });
            }
          });
        },
        { threshold: 0.2 }
      );
  
      observer.observe(coversSection);
    }
  });
  