import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
let who = ['la tortuga', 'el abuelo', 'mi tio', 'la iguana'];
let action = ['pisoteo', 'se orina en la ', 'corre', 'duerme'];
let what = ['mi cocina ', 'el baño', 'el avio', 'en el cuarto'];
let when = ['despues del trabajo', 'cuando va al bosque', 'cuando va de viaje', 'durante la cena', 'cuando juega cartas'];
 const pickRandomElementOf = (list) => list[Math.floor(Math.random() * list.length)]
 let excusas = `${pickRandomElementOf(who)} ${pickRandomElementOf(action)} ${pickRandomElementOf(what)} ${pickRandomElementOf(when)}`;
  let doc = document.getElementById("excusasID");
  doc.textContent = excusas
};
console.log("Hello Rigo 2 from the console!");