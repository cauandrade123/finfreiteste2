import prompt from 'prompt-sync'
let ler = prompt ()
import { menu } from './menu.js'
import { sacar, depositar, saldo } from '../financeiro.js'

let saldoCliente = 0

console.log('bem vindo ao FinFrei, para acessar o menu aperte a tecla enter')
ler ()


while (true) {
    let escolha = menu();

    if (escolha==1) {
        sacar(saldoCliente)
    }
    else if(escolha==2){
        depositar(saldoCliente)
    }
    else if(escolha==3){
        saldo(saldoCliente)
    }
    else if (escolha == 0) {
        break;
    }

}


