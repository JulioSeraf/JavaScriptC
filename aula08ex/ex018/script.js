var num = window.document.getElementById('inum')
let lista =  window.document.getElementById('iadnum')
var res = window.document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}
function inlista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true 

    }else{
        return false

    }

}


function add(){
    if(isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        var itens = window.document.createElement('option')
        lista.appendChild(itens)
        itens.text = `Numero ${num.value} add`

    }else{
        window.alert('Numero nao corresponde ou ja se encontra registrasdo')
    }

}
function soma(n){
    var total = 0
    for(con = 0; con < n; con++){
        total += valores[con]       
}
return total
}
function fim(){
    res.innerHTML = `Total de  Numeros cadastrado foram ${valores.length} <br>`
    res.innerHTML += `Soma Total dos Numeros ${soma(valores.length)} <br> `
    res.innerHTML += `Media dos valores`soma(valores.length)/ valores.length
}