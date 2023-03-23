function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('idade')
let res = window.document.getElementById('res')
let imgdiv = window.document.getElementById('imgdiv')
let sexo = window.document.getElementsByName('sexo')
somaidd = ano - fano.value
if (fano.value.length == 0 || fano.value > ano){
   window.alert('[ERROR] verifique os dados novamente')
}
var genero = ''
var img = document.createElement('img')
img.setAttribute('id', 'foto')
if(sexo[0].checked){
    genero = 'Homem'
    if(somaidd >= 0 && somaidd < 15){
        //criança
        img.setAttribute('src', 'imagens/criançah.jpg')

    }else if (somaidd >= 15 && somaidd < 30){
        //jovem       
        img.setAttribute('src', 'imagens/jovemh.jpg')
    }else if(somaidd >= 30 && somaidd < 50){
        //adulto
        img.setAttribute('src', 'imagens/adultom.jpg')
    }else{
        //idoso
        img.setAttribute('src', 'imagens/idosoh.jpg')

    }
}else if(sexo[1].checked){
    genero = 'Mulher'
    if (somaidd >= 0 && somaidd < 15){
        //criança
        img.setAttribute('src', 'imagens/criançam.jpg')

    }else if (somaidd >= 15 && somaidd < 30){
        //jovem
        img.setAttribute('src', 'imagens/jovenm.jpg')
    }else if (somaidd >= 30 && somaidd < 50){
        //adulta
        img.setAttribute('src', 'imagens/adultam.jpg')       
    }else if (somaidd > 50){
        //idosa
        img.setAttribute('src', 'imagens/idosom.jpg')
        
       
    }
}
res.innerText = `Detectado um(a) ${genero} de ${somaidd} de idade`
res.appendChild(img)

}
