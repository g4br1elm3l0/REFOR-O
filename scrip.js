//Crie uma função que recebe um array como parâmetro 
//e retorna quantos números negativos tem nesse mesmo array.

function negativos(array) {
    let numeros = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            numeros.push(array[i])
        }

    }
    return numeros
}

//console.log(negativos([1, 2, 3, 4, -1, -2, -3, -5]))


// Crie uma função que recebe um array como parâmetro
//  e retorna a soma todos os numeros negativos contidos nesse array.

function somaNeg(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            soma += array[i]

        }

    }
    return soma
}

// console.log(somaNeg([1, 2, 3, -1, -5, -10]))

//Crie uma função que recebe um número como parâmetro 
//e retorne um array contendo todos os números pares existentes entre 0 e o número passado no parâmetro.

function arraypar(numero) {
    let array = []

    for (let i = 0; i <= numero; i++) {
        if (i % 2 == 0) {
            array.push(i)
        }



    }

    return array

}
// console.log(arraypar(20))


// Crie uma função que recebe um array como parâmetro
//  e retorne outro array contendo apenas os valores negativos do array passado por parâmetro.

function negativos(array) {
    let valoresNeg = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            valoresNeg.push(array[i])
        }

    }
    return valoresNeg

}



// Crie uma funçao que recebe um array como parâmetro e some todos os seus elementos. Feito isso,
//  sua função deve retornar true se essa soma for maior que a quantidade de elementos no array. 
//  Caso contrário, deve retornar false.

function trueOrfalse(array) {
    soma = 0
    for (i = 0; i < array.length; i++) {
        soma += array[i]

    }

    if (soma > array.length) {
        return true
    }
    else {
        return false
    }

}

// Crie uma funçao que recebe um array como parâmetro e retorne outro array, 
// onde cada elemento desse novo array é igual ao elemento do array do parâmetro mais 5.


function novoArray(array) {
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        array2.push(array[i] + 5)

    }
    return array2
}

// console.log(novoArray([1, 2, 3, 4, 5]))

// Crie uma função que recebe um array como parâmetro e calcule a média dos valores contidos nesse array.
// Depois disso,
//  crie outro array e inclua nele apenas os elementos do array do parâmetro que sejam maiores que a média calculada.

function mediaTotal(array) {
    let media = 0
    let result = []
    for (i = 0; i < array.length; i++) {
        media += array[i] / array.length
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > media) {
            result.push(array[i])

        }
    }
    console.log(media)
    return result
}

// console.log(mediaTotal([1, 2, 3, 4, 5]))


// Crie uma função que recebe uma str como parâmetro, 
// e retorna a quantidade de letras ‘a’ que existem nessa str.

function stringA(str) {
    let result = "a"
    quantidade = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == result) {
            quantidade++
        }


    }

    return quantidade

}

// console.log(stringA("amanha"))


// Crie uma função que recebe um array contendo somente strings, 
// e retorna a soma do comprimento de todas as strings deste array.

function somaComp(array) {
    let soma = 0

    for (let i = 0; i < array.length; i++) {

        if (i < array.length) {
            soma += array[i].length
        }

    }

    return soma
}
// console.log(somaComp(["array", "joao", "gabriel"]))


// Crie uma função que recebe uma frase (uma str) como parâmetro,
// e retorna um array contendo todas as palavras dessa frase que possuem um comprimento ímpar,
// ou seja, que possuem uma quantidade ímpar de letras.


function oddWords(string) {
    //Separar palavras da string
    let word = ""
    let arrayWords = []
    let oddWords = []

    for (let i = 0; i < string.length; i++) {
        if (i == string.length - 1) {
            word += string[i]
            if (word != " ") {
                arrayWords.push(word)
                word = ""
            }
        } else if (string[i] != ' ') {
            word += string[i]
        } else {
            arrayWords.push(word)
            word = ""
        }
    }
    //-----------------
    //Separa as palavras ímpares
    for (let i = 0; i < arrayWords.length; i++) {
        if (arrayWords[i].length % 2 !== 0) {
            oddWords.push(arrayWords[i])
        }
    }
    //---------------
    return oddWords
}

// console.log(oddWords("frase muito da doida"));


// Crie uma função que recebe uma string como parâmetro, 
// e retorna uma string igual à que foi passada por parâmetro, mas com ‘0’ (zeros) no lugar das letras ‘o’.

function letraO(str) {
    let aux = " "

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "o" || "O") {
            aux += str[i].replace("o" || "O", 0)

        }

    }
    return (aux)
}

// console.log(letraO("joaquim"))



// Crie uma função que recebe uma string como parâmetro e retorna uma string igual à que foi passada por parâmetro,
//  mas com todos os ‘p’ (minúsculos) trocados por ‘P’ (maiúsculos).

function maiuscula(str) {
    let resultStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "p") {
            resultStr += "P"

        } else {
            resultStr += str[i]
        }

    }

    return resultStr

}
// console.log(maiuscula("paralelepipedo"))