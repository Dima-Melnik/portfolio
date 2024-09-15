const burger = document.querySelector(".menu-burger");
const menuList = document.querySelector(".menu-list");

burger.addEventListener("click", () => {
  /* Toggle active class */
  burger.classList.toggle("active");
  menuList.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen = menuList.classList.contains("active");
  console.log(menuOpen)
  let newMenuOpenStatus = menuOpen;
  burger.setAttribute("aria-expanded", newMenuOpenStatus);
})

// close mobile menu
document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click", () => {
  burger.classList.remove("active");
  menuList.classList.remove("active");
  burger.setAttribute("aria-expanded", "false"); // Update aria-expanded to false
}))