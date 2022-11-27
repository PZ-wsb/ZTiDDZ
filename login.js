const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "pz" && password === "12") { //sprawdzenie login i haslo 
        alert("You have successfully logged in."); // udane logowanie
        location.reload();
    } else {
        alert("Wrong login or password!!."); //nie udane logowanie
        location.reload();
    }
})