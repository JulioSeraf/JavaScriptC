function parimp(n){
    if  ( n % 2 == 0){
        return 'par'
    }else{
        return 'Impar'
    }
}
// criado variavel para receber retorno
var nu = 11
let res = parimp(nu)
console.log(`o numero ${nu} es ${res}`)


// retorno direto no console
console.log(`o numero ${nu} e ${parimp(nu)} `)