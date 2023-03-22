function carregar(){
var hr = window.document.
getElementById('hr')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
hr.innerHTML = `Agora sao ${hora} horas`
if (hora >= 0 && hora< 12){
    //dia
    img.src = 'imagens/DIA.jpg'
    window.document.body.style.backgroundColor = 'yellow'

}else if (hora >= 12 && hora < 18) {
    //tarde
    img.src = 'imagens/TARDE.jpeg'
    window.document.body.style.backgroundColor = 'blue'

}else if(hora >= 18){
    //noite
    img.src = 'imagens/noite.jpg'
    window.document.body.style.backgroundColor = 'gray'
    

}
}