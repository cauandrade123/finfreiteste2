import prompt from 'prompt-sync'
let ler = prompt()
import { sacar, depositar, saldo } from './financeiro.js'


export function menu(){
    console.log(
        `BEM VINDO
        1-SACAR
        2-DEPOSITAR
        3-SALDO`)
        let escolha=Number(ler())
        
        return escolha;

}