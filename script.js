function initAcordion() {
  const listdt = document.querySelectorAll(".js-accordion dt");
  console.log(listdt);

  if (listdt.length) {
    listdt[0].classList.add("ativo");
    listdt[0].nextElementSibling.classList.add("ativo");

    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    listdt.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAcordion();

//scroll suave

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');

function scrollToSection(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute('href');

  const section = document.querySelector(href);
  console.log(section);

  section.scrollIntoView( {
    behavior: 'smooth',
    block: 'start',
  })
  
  
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});