window.onload = function init() {
  let test = document.querySelector(".test");
  let btn = document.querySelector("#test-btn");

  btn.onclick = function () {
    test.innerHTML += `<li>CLICKED</li>`;
  };
};
