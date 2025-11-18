try {
    // EXECUTA ALGO
    // BANCO DE DADOS, CHAMADA DE API, ARQUIVOS..

    console.log("Consultando o banco de dados..")
    throw 'ERRO 1023 BANCO DE DADOS'
} catch (error) {
    // ERRO
    console.error(error)
    console.log("ERRO de execução")
} finally {
    // EXECUTA AO FINAL
    console.log('Execução finalizada')
}