function contar(){
var inicio = window.document.getElementById('ini')
var fim = window.document.getElementById('ifim')
var pas = window.document.getElementById ('ipassos')
var res = window.document.getElementById('res')
let ini = Number(inicio.value)
let fi = Number(fim.value)
let pass = Number(pas.value)
res.innerHTML = ''
if (pass <= 0){
    window.alert('Nao se pode contar [0] em Passos, vamos considerar [1] ')
    pass = 1 
}
if (fi == 0 && ini == 0){
    res.innerHTML = '[0] valor de contargem, impossivel contar'
}else{
    res.innerHTML = 'Contando:'
    if ( ini < fi){
        //contagem crecente 
        con = ini
        while( con <= fi){
            res.innerHTML += `${con} \u{1F449}`
            con = con + pass
         }

    }else if(ini > fi) {
        //contagem Regressiva
        for(con = ini; con > fi; con = con - pass){
        res.innerHTML += `${con} \u{1f449}`
        }
    }  
}
res.innerHTML += `\u{1F3C1}`
}