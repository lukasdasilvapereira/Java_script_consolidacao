console.log("JS CARREGOU")

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
        console.log("Nome vazio");
    }

    if (email === "" || email.length < 10 || !email.includes("@")) {
        pEmail.innerHTML = "Email is not valid"
        console.log("Email vazio")
    }

    if (pass === "") {
        pPass.innerHTML = "Password is required"
        console.log("Password vazio")
    }

    else if (pass.length < 8) {
        console.log("senha curta")
        pPass.innerHTML = "Password is lower than 8 characters"
    }
    else {
        window.location.href = "thanks.html"
    }

    let user = {
        nome: nome,
        email: email,
        pass: pass
    }

    localStorage.setItem('userData', JSON.stringify(user))
})

let dados = JSON.parse(localStorage.getItem("userData"))
console.log(dados)