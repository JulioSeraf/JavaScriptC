
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao ${hora} horas,`)
if (hora < 12 && hora > 4 ){
    console.log('Bom dia!!')
} else if(hora >= 12 && hora <= 18){
    console.log(`Boa tarde`)
}else if (hora > 18 && hora < 24){
    console.log(`Boa noite`)
}else if(hora > 0 && hora <= 4){
    console.log(`Ainda e de madrugada`)

}
