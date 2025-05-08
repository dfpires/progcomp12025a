function prova(){
    let artistica = Number(document.getElementById("artistica").value)
    let plateia = Number(document.getElementById("plateia").value)
    let cultural = Number(document.getElementById("cultural").value)
    let livro = Number(document.getElementById("livro").value)
    let equipe = Number(document.getElementById("equipe").value)

    // soma básica, de todas as equipes
    let soma = artistica + (plateia * 5) + (cultural * 200) + (livro * 10)
    // soma das regras especiais
    if (equipe == "Azul"){
        if (plateia > 150 && cultural > 3){
            soma = soma + 1000
        }
    }
    else if (equipe = "Amarela"){
        if (livro > 80 && cultural > 6){
            soma = soma + (livro - 80) * 20
        }
    } 
    else if (equipe == "Verde"){
        if (cultural > 5){
            soma = soma + 500
        }
    }
    else {
        if (artistica > 90){
            soma = soma + artistica * 1.5
        } 
    }
    alert(`A equipe ${equipe} tem soma de pontos igual a ${soma}`)
}