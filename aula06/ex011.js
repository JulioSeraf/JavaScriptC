var idade = 65

console.log(`Voce tem ${idade} anos de idade , seu voto e:`)
if( idade < 16){
    console.log('Nao vota')
}else if( idade < 18 || idade >= 65 ){
        console.log('Opcional')
    }else{
        console.log('Obligatorio')
    }

