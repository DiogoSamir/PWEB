function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = () => {
        return this.base * this.altura;
    };
}

var retangulo = new Retangulo(3,5);
alert("Área: " + retangulo.calcularArea());
alert("Inicio Exercício 2");

function Conta() {
    var nomeCorrentista;
    var banco;
    var numeroConta;
    var saldo;

    this.setNomeCorrentista = (value) => {
        this.nomeCorrentista = value;
    };

    this.getNomeCorrentista = () => {
        return this.nomeCorrentista;
    };

    this.setBanco = (value) => {
        this.banco = value;
    }

    this.getBanco = () => {
        return this.banco;
    };

    this.setNumeroConta = (value) => {
        this.numeroConta = value;
    };

    this.getNumeroConta = () => {
        return this.numeroConta;
    };

    this.setSaldo = (value) => {
        this.saldo = value;
    };

    this.getSaldo = () => {
        return this.saldo;
    };
}

function Corrente() {
    var saldoEspecial;

    this.setSaldoEspecial = (value) => {
        this.saldoEspecial = value;
    };

    this.getSaldoEspecial = () => {
        return this.saldoEspecial;
    };
}

function Poupanca() {
    var juros;
    var dataVencimento;

    this.setJuros = (value) => {
        this.juros = value;
    };

    this.getJuros = () => {
        return this.juros;
    };

    this.setDataVencimento = (value) => {
        this.dataVencimento = value;
    };

    this.getDataVencimento = () => {
        return this.dataVencimento;
    };
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

var contaCorrente = new Corrente();
contaCorrente.setNomeCorrentista("Felipe Matheus");
contaCorrente.setBanco("Banco Divisão;");
contaCorrente.setNumeroConta("211");
contaCorrente.setSaldo("2.500,00");
contaCorrente.setSaldoEspecial("900,00");

var contaPoupanca = new Poupanca();
contaPoupanca.setNomeCorrentista("Matheus Silveira");
contaPoupanca.setBanco("Banco BGM");
contaPoupanca.setNumeroConta("236");
contaPoupanca.setSaldo("320.00");
contaPoupanca.setDataVencimento("09/12/2020");
contaPoupanca.setJuros("2.05");

alert("Conta Corrente:" + "\n"
    + "Nome: "+contaCorrente.getNomeCorrentista() + "\n"
    + "Banco: "+contaCorrente.getBanco() + "\n"
    + "C/C: "+contaCorrente.getNumeroConta() + "\n"
    + "Saldo(R$): "+contaCorrente.getSaldo() + "\n"
    + "Saldo Especial(R$): "+contaCorrente.getSaldoEspecial()
);

alert("Conta Poupança:" + "\n"
    + "Nome: "+contaPoupanca.getNomeCorrentista() + "\n"
    + "Banco: "+contaPoupanca.getBanco() + "\n"
    + "C/C: "+contaPoupanca.getNumeroConta() + "\n"
    + "Saldo(R$): "+contaPoupanca.getSaldo() + "\n"
    + "Data de vencimento: "+contaPoupanca.getDataVencimento() + "\n"
    + "Juros(%): "+contaPoupanca.getJuros()
);