window.onload = function init() {
  import * as input from "./components/input";
  let main = document.getElementById("main");
  console.log(input);
  main.innerHTML += input;
};
