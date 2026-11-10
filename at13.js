// 13 . Funcionamento da Loja

var diadasemana = "segunda-feira"
var horario = 7

if ( horario >=8 && horario <= 18){
    var validarHorario = true
} if (diadasemana == "segunda-feira" || diadasemana == "terça=feira" || diadasemana == "quarta-feira" || diadasemana == "quinta-feira" || diadasemana == "sexta-feira"){
    var validarSemana = true
}if (validarHorario == true && validarSemana == true){
    console.log ("A loja está Aberta!")
}else {
    console.log ("A loja está FECHADA!")
}