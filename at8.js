// 8 . Aprovação Escolar Completa (&& e ||)

var nota = 6
var frequencia = 7
var trabalhoExtra = true

if ((nota >= 7 && frequencia >=75) || (nota < 7 && trabalhoExtra == true && frequencia >= 75)){
    console.log ("Aprovado!")
}else {
    console.log ("Reprovado")
}