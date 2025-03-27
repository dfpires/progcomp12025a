function calcular(){
    // vamos criar 2 variáveis 
    // JS as variáveis não possuem tipo
    let mascote, homenagem
    // recupera o valor do mascote digitado pelo usuário
    mascote = document.getElementById("mascote").value
    // recupera o valor da homenagem digitado pelo usuário
    homenagem = document.getElementById("homenagem").value
    // calcular a soma
    let soma = Number(mascote) + Number(homenagem)
    // retorna o valor ao HTML
    // template string
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}