// Lav en variabel, der refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav en variabel, der refererer til "nav"
const nav = document.querySelector("nav");

//Skjul luk, så den kun kommer frem når man trykker på burgermenu
document.querySelector("#luk").classList.add("hide");

//MED DISSE TO PUNKTER herunder KAN MAN KLIKKE LINJER FREM)
function toggleMenu() {
  nav.classList.toggle("shown");

  //nav-variabel med klassen "shown"
  const menuShown = nav.classList.contains("shown");

  //if/else
  if (menuShown) {
    // hvis nav har klassen "shown", så tilføjes "Luk"
    luk();
  } else {
    // hvis nav IKKE har klassen "shown", så tilføjes "Menu"
    menu();
  }
}
function luk() {
  document.querySelector("#luk").classList.remove("hide");
  document.querySelector("#menu").classList.add("hide");
}
function menu() {
  document.querySelector("#menu").classList.remove("hide");
  document.querySelector("#luk").classList.add("hide");
}

// Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);

//Sætter rotation classlist på blomster så de roterer
document.querySelector("#gron_blomst").classList.add("rotation");
document.querySelector("#bla_blomst").classList.add("rotation");
document.querySelector("#lyserod_blomst").classList.add("rotation");
