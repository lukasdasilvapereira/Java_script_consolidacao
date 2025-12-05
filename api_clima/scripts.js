  const icons = {
        sun: "imagens/sol.png",
        moon: "imagens/lua.png",
        poucaChuva: "imagens/ligh.rain.png",
        cloud: "imagens/nublado.png",
        rain: "imagens/chuva.png",
        vento: "imagens/wind.png",
        halfCloudyDay: "imagens/parcialmente.nublado.dia.png",
        halfCloudyNight: "imagens/parcialmente.nublado.noite.png",
        snow: "imagens/snow.png",
    }

    function getCode(code){
        if(code === 0) return icons.sun;
        if(code >= 1 && code <= 3) return icons.cloud;
        if(code >= 45 && code <= 48) return icons.cloud;
        if(code >= 51 && code <= 67) return icons.rain;
        if(code >= 71 && code <= 77) return icons.snow;
        if(code >= 80 && code <= 99) return icons.rain;
        
        return icons.halfCloudyDay
    }


async function buscar() {

    let inputValue = document.getElementById("text").value
    let image = document.getElementById("image")
    let divValue = document.querySelector(".para")

    try {
        const data = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${inputValue}`)

        if (!inputValue.trim()) {
            alert("Digite uma cidade válida")
            return
        }

        const get = await data.json()

        const lat = get.results[0].latitude
        const long = get.results[0].longitude

        const weatherDate = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true
`)
        const getWeat = await weatherDate.json()

        divValue.innerHTML = `
            <p>Cidade: ${inputValue}  </p>
            <p>Temperatura: ${Math.round(getWeat.current_weather.temperature)} Cº  </p>
            <p>Vento: ${getWeat.current_weather.windspeed}  </p>
            <p>Dia/Noite: ${getWeat.current_weather.is_day === 1 ? "Dia":"Noite"}  </p>
        `

        let iconSrc = getCode(getWeat.current_weather.weathercode)

        image.src = iconSrc

    }
    catch (error) {
        alert(error)
    }
}


