const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links_mobile");
const moreMenu = document.querySelector(".more .menu_more");


bShowMobileLinks.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
});

function validacion() {
    let campo = document.forms["registro"]["campo_nombre"].value;
    if (campo == "") {
      alert("Completar nombre");
      return false;
    }
  }

  function validacion1() {
    let campo = document.forms["registro"]["campo_dni"].value;
    if (campo == "") {
      alert("Completar DNI");
      return false;
    }
  }

  function validacion2() {
    let campo = document.forms["registro"]["campo_nacimiento"].value;
    if (campo == "") {
      alert("Completar fecha de nacimiento");
      return false;
    }
  }

  function validacion3() {
    let campo = document.forms["registro"]["campo_email"].value;
    if (campo == "") {
      alert("Completar email");
      return false;
    }
  }