// Criar uma função que retorna os números que aparecem apenas 1 vez

function repetir() {
    let nums = [1, 2, 2, 3, 4, 4, 5];

    let contagem = {}

    if (!contagem[nums]) {
        contagem[nums] = 1;
    } else {
        contagem[nums]++;
    }

}

repetir()
