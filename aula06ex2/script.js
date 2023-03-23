function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('idade')
let res = window.document.getElementById('res')
if (fano.value.length == 0 || fano.value > ano){
   window.alert('[ERROR] verifique os dados novamente')
}else {
window.alert('tudo ok')    
}


}
