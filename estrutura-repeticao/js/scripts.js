function exe0(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 6
    // mostra o resultado
     alert(`A média das notas é ${media.toFixed(1)}`)
}
function pesquisaSatisfacao(){
    let nota // guarda as notas do participante
    let conta = 1 // vai contar de 1 a 10
    let contaSatisfeitos = 0 // temos 0 satisfeitos inicialmente
    let contaInsatisfeitos = 0 // temos 0 insatisfeitos inicialmente
    let soma = 0
    while (conta <= 10){
        nota = Number(prompt(`Informe a nota do participante ${conta}`))
        if (nota < 0 || nota > 10 || isNaN(nota)){
            alert(`Nota inválida`)
            continue // volta para o início do loop
        }
        else if (nota >= 8){
            contaSatisfeitos++ // contaSatisfeitos = contaSatisfeitos + 1
        }
        else if (nota < 5){
            contaInsatisfeitos++ // contaInsatisfeitos = contaInsatisfeitos + 1
        }
        soma = soma + nota
        conta++ // conta = conta + 1 (incrementa conta)
    }
    alert(`Satisfeitos ${contaSatisfeitos} Insatisfeitos ${contaInsatisfeitos}`)
    let media = soma / 10
    alert(`A média é ${media.toFixed(1)}`)
}
function exe3(){
    let f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0
    let conta = 1, idade
    while (conta <= 8){
        idade = Number(prompt(`Informe a idade da pessoa ${conta}`))
        if (idade >= 0 && idade <= 15){
            f1++
        }
        else if (idade >= 16 && idade <= 30){
            f2++
        }
        else if (idade >= 31 && idade <= 45){
            f3++
        }
        else if (idade >= 46 && idade <= 60){
            f4++
        }
        else if (idade > 60 && idade < 120){
            f5++
        }
        else {
            alert(`Idade inválida`)
            continue // volta para o início do while, não executando para baixo
        }
        conta++
    }
    alert(`F1: ${f1} F2: ${f2} F3: ${f3} F4: ${f4} F5: ${f5}`)
    alert(`%F1 ${f1/8*100} %F5 ${f5/8*100}`)
}
// fazer o exercício 1 e depois o exercício 2 para a próxima aula
function exe1(){
    let a, b, c, d, aux
    let grupo = 1
    while (grupo <= 5){
        a = Number(prompt(`Informe o valor de a`))
        b = Number(prompt(`Informe o valor de b`))
        c = Number(prompt(`Informe o valor de c`))
        d = Number(prompt(`Informe o valor de d`))
        let conta = 1
        while (conta <= 3){
            if (a > b){
                aux = a; a = b; b = aux;
            }
            if (b > c){
                aux = b; b = c; c = aux;
            }
            if (c > d){
                aux = c; c = d; d = aux;
            }
            conta++
        }
        alert(`Ordem crescente ${a} ${b} ${c} ${d} Ordem decrescente ${d} ${c} ${b} ${a}`)
        grupo++
    }
}
function exe2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro, maiorLucro = 0
    let aux = ""
    while (preco >= 1.0){
        lucro = (preco * qtde) - despesa
        if (lucro > maiorLucro){
            maiorLucro = lucro
        }
        aux = aux + '\n' + (`${preco} - ${qtde} - ${despesa} - ${lucro}`)
        qtde = qtde + 26
        preco = preco - 0.5
    }
    alert(aux)
    alert(maiorLucro)
}