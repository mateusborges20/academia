
//scroll suave

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');

console.log(linksInternos);


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

