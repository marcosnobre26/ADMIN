export class Auth {
    public id: number;
    public nome: string;
    public email: string;
    public senha: string;
    public datanascimento: string;
    public altura: string;
    public peso: string;
    public sexo: string;
    public datacadastro: string;
    public status: string;

    constructor(id: number, nome: string, email: string, senha: string, datanascimento: string, altura: string, peso: string, sexo: string, datacadastro: string, status: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.datanascimento = datanascimento;
        this.altura = altura;
        this.peso = peso;
        this.sexo = sexo;
        this.datacadastro = datacadastro;
        this.status = status;
    }
}
