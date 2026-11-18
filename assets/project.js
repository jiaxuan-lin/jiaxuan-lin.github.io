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
  var yr = document.getElementById("yr"); if (yr) yr.textContent = new Date().getFullYear();
})();
