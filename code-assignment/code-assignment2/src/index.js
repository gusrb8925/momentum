const title = document.querySelector("body");

function hadlerResize() {
  const width = window.innerWidth;
  if (width < 500) {
    title.classList.add("small");
  } else if (width > 700) {
    title.classList.add("large");
  } else {
    title.className = "";
  }
}

window.addEventListener("resize", hadlerResize);
