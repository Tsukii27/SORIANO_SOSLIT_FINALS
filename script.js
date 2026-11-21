var btns = document.querySelectorAll("#tabs button"),
  poems = document.querySelectorAll(".poem");
btns.forEach(function (b) {
  b.addEventListener("click", function () {
    var i = +b.dataset.i;
    btns.forEach(function (x, j) {
      x.classList.toggle("on", j === i);
    });
    poems.forEach(function (p, j) {
      p.hidden = j !== i;
    });
  });
});