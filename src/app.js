/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let valores = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
let palo = ["corazon", "pica", " trebol", "diamante"];

let valorRandom = valores[Math.floor(Math.random() * valores.length)];
let paloRandom = palo[Math.floor(Math.random() * palo.length)];
console.log(valorRandom, paloRandom);
