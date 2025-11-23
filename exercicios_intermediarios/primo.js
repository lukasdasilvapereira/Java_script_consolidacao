function ehPrimo(n) {
    if(n <= 1){ 
        return "Não é Primo"
    }
    
    for(let i = 2; i < Math.sqrt(n); i++) {
        if(n % 1 === 0) {
            return "Não é primo"
        }
    }

    return "Primo"
}

console.log(ehPrimo(9))