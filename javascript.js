// Lav en variabel, der refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav en variabel, der refererer til "nav"
const nav = document.querySelector("nav");

//Skjul luk, så den kun kommer frem når man trykker på burgermenu
document.querySelector("#luk").classList.add("hide");
// Lav en function, der hedder toggleMenu()
function toggleMenu() {
  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown" (MED DISSE TO PUNKTER KAN MAN KLIKKE LINJER FREM)
  nav.classList.toggle("shown");

  // 1. Lav en variabel, der hedder menuShown
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
  const menuShown = nav.classList.contains("shown");

  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menuShown i if-sætningen => if (menu)
  if (menuShown) {
    // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
    luk();
  } else {
    // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
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

/* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);
