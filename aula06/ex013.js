var agora = new Date()
var diasem =  agora.getDay()
/* dias da semana em javaScript
0 == DOMINGO 
1 == SEGUNDA
2 == TERCA
3 == QUARTA
4 == QUINTA
5 == SEXTA
6 == SABADO
*/
switch(diasem){
    case 0:
        console.log(`Hoje e DOMINGO`)
    break
    case 1:
        console.log(`Hoje e SEGUNDA`)
        break
    case 2:
        console.log(`Hoje e TERÇA`)
        break
    case 3:
        console.log('Hoje e QUARTA')
        break
    case 4:
        console.log(`Hoje e QUINTA`)
        break
    case 5:
        console.log(`Hoje e SEXTA`)
        break
    case 6: 
        console.log(`Hoje e SABADO`)
        break
    default:
        console.log(`Inventarao outro dia na semana foi?`)
        break



}