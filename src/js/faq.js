document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");
  const answers = document.querySelectorAll(".faq-answer");

  // Set initial state - all answers closed
  answers.forEach(answer => {
    answer.style.height = "0";
  });

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentNode;
      const answer = faqItem.querySelector(".faq-answer");
      const isActive = faqItem.classList.contains("active");

      // Close all other items
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("active");
          item.querySelector(".faq-answer").style.height = "0";
        }
      });

      // Toggle current item
      if (!isActive) {
        faqItem.classList.add("active");
        answer.style.height = answer.scrollHeight + "px";
      } else {
        faqItem.classList.remove("active");
        answer.style.height = "0";
      }
    });
  });
});
