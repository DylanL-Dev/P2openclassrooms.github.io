const progressBar = document.querySelector(".progress-bar");

progressBar.addEventListener("animationend", () => {
  if (progressBar.style.width === "100%") {
    window.location.href =
      "https://dylanl-dev.github.io/P2openclassrooms.github.io/";
  }
});
