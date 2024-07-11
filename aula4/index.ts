/* let nome :string = 'luanni'

let idade : number = 17

let souEstudante: boolean = true


console.log(`meu nome é ${nome} e tenho ${idade} anos e sou ${souEstudante}`) */


//criar uma função que pede  nome idade e tem carteira de motorista

/* let nome:string = "julio"
let idade: number = 35
let temCarteira: boolean = true


function podeDirigir(myname:string,myidade: number,mytemCarteira:boolean):void {
    console.log(`me chamo ${nome} tenho ${idade} anos e ja posso ${temCarteira} `)
}



//import * as  readlinesync from 'readline-sync'

/* npx tsc index.ts
node index.js 

 console.log(`me chamo ${nome} tenho ${idade} anos e ja posso ${temCarteira} `)


console.log (podeDirigir('myname:string,myidade: number,mytemCarteira:boolean')) */


let nome: string = readlineSync.question(` qual é seu nome ?`)
let idade: number = readlineSync.question(` qual é sua idade ?`)
let temCarteira: boolean = readlineSync.question(` tem carteira de motorista`)


function podeDirigir(myname:string,myidade: number,mytemCarteira:boolean):void {
   if (idade >== 18&& temCarteira === 'sim') {
    console.log(`${nome} , voce pode dirigir`)
   } else {
    console.log(`${nome} , voce não pode dirigir`)
    
   }
}

podeDirigir(nome, idade, temCarteira);






