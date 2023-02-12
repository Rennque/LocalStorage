const form = document.querySelector("form"),
  inputArea = document.querySelector(".input-area");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value,
    password = document.querySelector("#password").value,
    msgArea = document.querySelector("#msg-area");

  const data = JSON.parse(localStorage.getItem("user"));

  if (username == data.username && password == data.password) {
    setLocalStorage("user", {
      ...data,
      isLoggedIn: true,
    });
    location.href = "registro.html";
  } else {
    msgArea.innerHTML = "credenciais incorretas";
    msgArea.style = "color: red";
  }
});

function logout() {
  localStorage.removeItem("isLogged");
  Location.reload();
}

window.onload = () => {
  const userInfo = {
    username: "henrique",
    password: "teste",
    displayName: "Bem Vindo(a)",
    isLoggedIn: false,
  };

  const myLocalStorage = localStorage.getItem("user");

  !myLocalStorage && setLocalStorage("user", userInfo);

  if (myLocalStorage) {
    const { isLoggedIn } = JSON.parse(localStorage.getItem("user"));
    isLoggedIn && (location.href = "./registro.html");
  }
};

function setLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
