let accessToken = sessionStorage.getItem("accessToken");

if (!accessToken) {
  accessToken = prompt("Add meg a GitHub access tokened:");
  sessionStorage.setItem("accessToken", accessToken);
}

const GITHUB_ACCESS_TOKEN = accessToken;

function loadNavigation() {
  fetch("nav.html")
    .then((res) => res.text())
    .then((navHtml) => {
      const body = document.querySelector("body");
      body.insertAdjacentHTML("afterbegin", navHtml);
    })
    .catch((err) => console.error(err));
}

loadNavigation();
