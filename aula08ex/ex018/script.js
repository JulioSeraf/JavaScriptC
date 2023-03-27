function add(){
    var num = window.document.getElementById ('inum')
    var addnumero = window.document.querySelector('select#iadnum')
    var numero = Number(num.value)
    if (numero == 0 || numero >100){
        window.alert(`[ERROR], Numero nao corresponde!`)
    }else{
    var itens = document.createElement ('option')
    itens.text = `Numero ${numero} Adicionado`
    addnumero.appendChild(itens)
    }
    


}
function fim(){
    var res = window.document.getElementById('res')
    res = itens
}