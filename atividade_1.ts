// Declaração de variáveis
export const nome: string = "Maria";
export const idade: number = 30;
export const altura: number = 1.75;
export const estudante: boolean = true;

// Função para verificar se um número é par ou ímpar
export function verificaParImpar(numero: number): string {
    return numero % 2 === 0 ? "par" : "ímpar";
}

// Função para calcular o somatório de 1 até n
export function somatorio(n: number): number {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

// Função para calcular o número de Fibonacci
export function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Classe Retângulo
export class Retangulo {
    constructor(private largura: number, private altura: number) {}

    area(): number {
        return this.largura * this.altura;
    }

    perimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}
