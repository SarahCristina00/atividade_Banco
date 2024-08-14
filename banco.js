class conta_bancaria{
    saldoInicial = 0;
    entrada = 0;
    saida = 0;
    saldoFinal = 0;
    //constructor(agencia, conta){
       // this.agencia = agencia;
        //this.conta = conta;
    //}
}

const conta = new conta_bancaria();
conta.saldoInicial = 350;
conta.saida = 50;
conta.entrada = 200;
conta.saldoFinal = (conta.saldoInicial + conta.entrada) - conta.saida;

console.log(conta);