/* let nome :string = 'luanni'

let idade : number = 17

let souEstudante: boolean = true


console.log(`meu nome é ${nome} e tenho ${idade} anos e sou ${souEstudante}`) */
//criar uma função que pede  nome idade e tem carteira de motorista
var nome = "julio";
var idade = 35;
var temCarteira = true;
function podeDirigir(myname, myidade, mytemCarteira) {
    console.log("me chamo ".concat(nome, " tenho ").concat(idade, " anos e ja posso ").concat(temCarteira));
}
//import * as  readlinesync from 'readline-sync'
/* npx tsc index.ts
node index.js */
console.log(podeDirigir('myname:string,myidade: number,mytemCarteira:boolean'));
