//modulo que encapsula as opercaoes da calculadora

let msg = 'A calculadora está iniciando...';

console.log('$ ' + msg );


function soma(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

console.log('$ ' + 'Terminou de carregar o módulo de calculadora');

module.exports = {
    soma,
    sub
};