import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener("DOMContentLoaded", function () {
  new Accordion('.faq-list', {
    duration: 400,
    showMultiple: false,
    elementClass: 'faq-item',
    triggerClass: 'faq-question',
    panelClass: 'faq-answer',
    activeClass: 'active',
    beforeOpen: (currentElement) => {
      currentElement.querySelector('.icon-down').style.display = 'none';
      currentElement.querySelector('.icon-up').style.display = 'block';
    },
    beforeClose: (currentElement) => {
      currentElement.querySelector('.icon-down').style.display = 'block';
      currentElement.querySelector('.icon-up').style.display = 'none';
    }
  });
});
