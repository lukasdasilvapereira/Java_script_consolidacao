function gerar() {
    let valor = document.querySelector("#qrcode").value
    let chamadaAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl='
    let soma = chamadaAPI + encodeURIComponent(valor)
    let imagem = document.getElementById("image")
    imagem.src = soma
}