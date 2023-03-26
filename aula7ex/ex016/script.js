function contar(){
var inicio = window.document.getElementById('ini')
var fim = window.document.getElementById('ifim')
var pas = window.document.getElementById ('ipassos')
var res = window.document.getElementById('res')
let ini = Number(inicio.value)
let fi = Number(fim.value)
let pass = Number(pas.value)
con = ini
res.innerHTML = ''
if (pass == 0){
    window.alert('Nao se pode contar [0] em Passos, vamos considerar [1] ')
    pass = 1 
    while( con <= fi){
        res.innerText += (`${con} &#x1F449`) 
        con = con + pass
    }
}else if (fi == 0){
    res.innerHTML = '[0] valor de contargem, impossivel contar'
}else{
while( con <= fi){
    res.innerText += (`${con} &#x1F449`) 
    con = con + pass
}
}
}