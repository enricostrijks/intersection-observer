let alleLinks = document.querySelectorAll("nav a");
let deSecties = doc;

// funtie die ade class actief verwijderd
const verwijderActief = () => {
  alleLinks.forEach((link) => {
    if ((link.classList = "actief")) {
      link.classList.remove("actief");
    }
  });
};

const maakActief = (elem) => {
  verwijderActief();
  elem.classList.add("actief");
};

alleLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    maakActief(e.target);
    (window.location = e.target), href;
  });
});
