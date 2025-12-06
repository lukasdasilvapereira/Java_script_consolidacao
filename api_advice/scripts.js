async function getApi() {
    let adviceText = document.querySelector(".advice_text")

    try {
        const data = await fetch("https://api.adviceslip.com/advice")

        const get = await data.json()

        adviceText.innerHTML = `${get.slip.advice}`
    } catch (error) {
        console.log(error)
    }
}