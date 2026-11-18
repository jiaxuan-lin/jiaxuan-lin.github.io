/* Shared behavior for project pages: the sun/moon theme switch (same setting as the homepage). */
(function () {
  var root = document.documentElement, btn = document.getElementById("mode");
  if (!btn) return;
  function sync() { btn.setAttribute("aria-checked", root.getAttribute("data-mode") === "dark" ? "true" : "false"); }
  sync();
  btn.addEventListener("click", function () {
    var dark = root.getAttribute("data-mode") !== "dark";
    if (dark) root.setAttribute("data-mode", "dark"); else root.removeAttribute("data-mode");
    try { localStorage.setItem("jl-mode", dark ? "dark" : "light"); } catch (e) {}
    sync();
  });
  Array.prototype.forEach.call(document.querySelectorAll(".dd"), function (dd) {
    var b = dd.querySelector(".dd-btn");
    function set(o) { dd.classList.toggle("open", o); b.setAttribute("aria-expanded", o ? "true" : "false"); }
    b.addEventListener("click", function (e) { e.stopPropagation(); set(!dd.classList.contains("open")); });
    document.addEventListener("click", function (e) { if (!dd.contains(e.target)) set(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && dd.classList.contains("open")) { set(false); b.focus(); } });
  });
  var yr = document.getElementById("yr"); if (yr) yr.textContent = new Date().getFullYear();
})();
