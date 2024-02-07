document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach((item) => {
      item.addEventListener('click', function () {
        // Toggle the active class to expand/collapse
        this.classList.toggle('active');
      });
    });
  });
  