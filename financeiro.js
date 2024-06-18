import prompt from 'prompt-sync'
let ler = prompt()

import { } from './app.js'

export function sacar(saldo) {

    console.log('quanto deseja sacar')
    let saque = Number(ler())

    if (saldo > 0) {
        saldo -= saque
        console.log(`seu novo saldo é: ${saldo} `)
        console.log('deseja sacar?')
        let resposta = ler()
        if (resposta == 'sim') {
            sacar()
        } else {
            return ('obrigado');
        }
    }

    while (saldo <= 0) {
        console.log('saldo insuficiente')
        console.log('deseja depositar?')

        let resposta = ler()
        if (resposta == 'sim') {
            depositar()
        } else if (resposta == 'nao') {
            console.log('obrigado')
            break;
        }
    }
    return saldo;
}


export function depositar(saldo) {
    console.log('quanto deseja depositar')
    let deposito = Number(ler())
    saldo += deposito
    console.log('seu novo saldo é: ' + saldo)
    console.log('deseja sacar?')
    let resposta = ler()
    if (resposta == 'sim') {
        sacar()
    } else {
        console.log('obrigado')
    }
    return saldo;

}

export function saldo() {
    console.log('deseja ver seu saldo atual?')
    let resposta = ler()
    if (resposta == 'sim') {
        console.log(`seu saldo atual é ${saldo}`)
    }
    return saldo;
}

