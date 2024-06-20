const tlacitko = document.querySelector("#menu-tlacitko");
const menuPolozky = document.querySelector("#menu-polozky");

function toggleMenu() {
    if (menuPolozky.classList.contains("show")) {
      menuPolozky.classList.remove("show");
    } else {
      menuPolozky.classList.add("show");
    }
}
  
tlacitko.addEventListener("click", toggleMenu);
