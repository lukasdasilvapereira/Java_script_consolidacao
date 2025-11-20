function gerar() {
    let valor = document.getElementById("qrcode").value
    let chamadaAPI = `http://api.qrserver.com/v1/create-qr-code/?data=${valor}!&size=100x100`
    let soma = chamadaAPI + encodeURIComponent(valor)
    let imagem = document.getElementById("image")
    imagem.src = soma
}