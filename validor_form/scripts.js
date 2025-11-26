let pNome = document.querySelector(".maybe-nm")
let pEmail = document.querySelector(".maybe-em")
let pPass = document.querySelector(".maybe-pw")
let btn = document.querySelector(".enviar")

btn.addEventListener(("click"), () => {

    let nome = document.getElementById("name").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value

    pNome.innerHTML = ""
    pEmail.innerHTML = ""
    pPass.innerHTML = ""

    if (nome === "") {
        pNome.innerHTML = "Name is required"
    }

    if (email === "" || email.length < 10 || !email.includes("@")) {
        pEmail.innerHTML = "Email is not valid"
    }

    if (pass === "") {
        pPass.innerHTML = "Password is required"
    }

    else if (pass.length < 8) {
        pPass.innerHTML = "Password is lower than 8 characters"
    }
})