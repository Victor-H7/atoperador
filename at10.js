// 10 . Regra de Frete Grátis (&&,|| e !)

var valorCompra = 100
var membroVip = true
var zonaRural = false

if ((valorCompra > 100 || membroVip == true) && (!zonaRural)){
    console.log ("Tem direito à Frete Grátis")
}else {
    console.log ("Não tem direito à Frete Gratis")
}
