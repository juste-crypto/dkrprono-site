document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  const title = document.getElementById("site-title");
  setInterval(() => {
    title.style.letterSpacing = title.style.letterSpacing === "2px" ? "0px" : "2px";
  }, 1000);
});
