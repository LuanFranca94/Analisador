 let num = document.getElementById('num')
 let lista = document.getElementById('listaNum')
 let res = document.getElementById('res')
 let valores = []

function isNumero(n) {
    if (num.value >= 1 && num.value <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        let item = document.createElement('option')
        valores.push(Number(num.value))
        lista.appendChild(item)
        item.innerHTML = `O valor ${num.value} foi adicionado.`
        res.innerHTML = " "
    } else {
        alert(`O valor digitado é inválido ou já está cadastrado`)
    }
    num.value = " "
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Cadastre algum valor para finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        let numPar = 0
        let numImpar = 0
        for (let pos in valores) {
            soma += valores[pos]
            media = soma/total
            
            if (valores[pos] % 2 == 0) {
                numPar += 1
            } 

            if (valores[pos] % 2 == 1) {
                numImpar += 1
            }

            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        res.innerHTML = `O total de números cadastrados é de ${total}<br>`
        res.innerHTML += `O maior valor cadastrado é ${maior}<br>`
        res.innerHTML += `O menor valor cadastrado é ${menor}<br>`
        res.innerHTML += `A soma de todos os valores cadastrados é ${soma}<br>`
        res.innerHTML += `A média de todos os valores cadastrados é ${parseFloat(media)}<br>`
        res.innerHTML += `O total de números "Pares" é de ${numPar}<br>`
        res.innerHTML += `O total de números "Ímpares" é de ${numImpar}`
    }
}