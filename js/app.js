const arrow = document.querySelector(".arrow");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) arrow.classList.add("active");
  else arrow.classList.remove("active");
});
