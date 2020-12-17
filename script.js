let alleLinks = document.querySelectorAll("nav a");
let deSecties = document.querySelectorAll("section");

const opties = {
  rootMargin: "-150px",
  treshold: 1.0,
};

const verwerkDoorsnijding = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let link = zoekBijpassendeLink("#" + entry.target.id);
      maakActief(link);
    }
  });
};

let observer = new IntersectionObserver(verwerkDoorsnijding, opties);

deSecties.forEach((sectie) => {
  observer.observe(sectie);
});
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
    window.location = e.target.href;
  });
});

const zoekBijpassendeLink = (id) => {
  let link = document.querySelector('nav a[href="' + id + '"]');
  return link;
};
