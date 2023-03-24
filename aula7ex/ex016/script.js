function contar(){
var inicio = window.document.getElementById('ini')
var fim = window.document.getElementById('ifim')
var pas = window.document.getElementById ('ipassos')
var res = window.document.getElementById('res')
let ini = Number(inicio.value)
let fi = Number(fim.value)
let pass = Number(pas.value)
con = ini
if (con == 0 ){
    window.alert('0 nao pode ser o inicio')
}else{
while( con < fi){
    res.innerHTML += con 
    con = con + pass
}
}
}