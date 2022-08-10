let lis = document.querySelectorAll(".information ul li"),
    divs = document.querySelectorAll(".information .info-content > div");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((li) => {li.classList.remove("active")});
    li.classList.add("active");

    divs.forEach((div) => {
      div.style.display = "none";

      if (div.classList.contains(li.dataset.class)) {
        div.style.display = "block";
      }
    });
  });
});

let year = document.querySelector(".footer .year");

year.textContent = new Date().getFullYear();