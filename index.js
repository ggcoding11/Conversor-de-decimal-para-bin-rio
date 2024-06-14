//Conversor de binário para decimal

var Binario = 101011001111011

var Sbinario = String(Binario)

var SdigitosBinario = Sbinario.split("")


console.log("Seu binário é " + Binario)

var contador = 1
var ValorConvertido = 0


while(contador <= SdigitosBinario.length){
    var CasasDigitos = SdigitosBinario.length - contador
    var ExpoenteNotacao = contador - 1
	ValorConvertido += SdigitosBinario[CasasDigitos] * (2**(ExpoenteNotacao))
	contador++
}

console.log("Em decimal, fica " + ValorConvertido)