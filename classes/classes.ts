class Data {

    public dia: number;
    public mes: number;
    public ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia,
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversario = new Data(3, 11, 1991);

aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data
casamento.ano = 2017
console.log(casamento);

