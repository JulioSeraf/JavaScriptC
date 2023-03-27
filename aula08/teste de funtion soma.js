function soma(n1=0, n2=0, n3=0){
    return n1 * n2 - n3
}

console.log (soma(2,1))

console.log('==========================')
// CRIANDO FUNCTION DENTRO DE UMA VAR

let a = function somador(n1=0,n2=0){
    return n1+n2 
}

console.log (a(10,20))