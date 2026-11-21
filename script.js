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


var bar = document.createElement("div");
bar.className = "progress";
var topBtn = document.createElement("button");
topBtn.className = "top";
topBtn.setAttribute("aria-label", "Bumalik sa taas");
topBtn.innerHTML = "<span>↑</span>";
topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
document.body.append(bar, topBtn);

window.addEventListener("scroll", function () {
  var h = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (scrollY / h) * 100 + "%";
  topBtn.classList.toggle("show", scrollY > 400);
});


var io = new IntersectionObserver(
  function (items) {
    items.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll("section > h2, .intro, .card").forEach(function (el) {
  el.classList.add("reveal");
  io.observe(el);
});

var links = document.querySelectorAll("nav a");
var spy = new IntersectionObserver(
  function (items) {
    items.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("header, section").forEach(function (s) {
  spy.observe(s);
});