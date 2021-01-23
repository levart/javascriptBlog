import fetch from "./http.js";
const nav = document.querySelector("#menu")
setNavigation();

function setNavigation() {
  fetch("GET", "/navigation")
  .then((navigation) => {
    navigation.forEach(element => {
        const li = document.createElement("li");
        li.classList.add("nav-item");
        const a = document.createElement("a")
        a.classList.add("nav-link")
        a.setAttribute("href", element.url)
        a.textContent = element.name;
        li.append(a)
        nav.append(li);
    });
    
  });
}


