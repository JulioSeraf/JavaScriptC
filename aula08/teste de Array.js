let local = [4, 91, 9,12,3]
local [4] = 8
local.push(3)
console.log(`O array tem ${local.length} posiçoes`)
console.log(`O primeiro valor do Array e ${local[0]}`)
console.log(`A orde crescente do valores  do array e ${local.sort()}`)
//Percuso por Array po FOR TRADICIONAL
for(var con = 0; con<local.length; con ++){
    console.log( `A posiçao ${con} tem o Valor ${local[con]}`)
}
// Percurso por Array simpificado por For/in
for(con in local){
    console.log( `A posiçao ${con} tem o Valor ${local[con]}`)
    
}
var valo = 8
var pos = local.indexOf(valo)
if(pos == -1){
    console.log(`O valor ${valo} nao foi encontrado`)
}else{
    console.log(`O valor ${valo} esta na posicao ${pos} do array`)
}