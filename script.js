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
