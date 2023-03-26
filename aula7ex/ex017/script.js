function calcular(){
    let num = window.document.querySelector('input#inum')
    var res = window.document.getElementById('ires')
    const nu = Number(num.value)
    res.innerHTML = ''
    for(var con = 1; con <= 10; con++){
        var soma = nu * con
        let itens = document.createElement('option')
        itens.text = `${nu} x ${con} = ${soma}`
        res.appendChild(itens)
    }
    
  
   

}