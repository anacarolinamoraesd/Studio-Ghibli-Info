import java.util.Scanner;

public class Calculadora {
    public static void main( String [] args) {
        System.out.println("===== Calculadora =====");

        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número");
        double num1 = entrada.nextDouble();
        System.out.println("Digite outro número");
        double num2 = entrada.nextDouble();

        System.out.println("==== Operação Matematica");
        System.out.println(" + Adicionar os numeros");
        System.out.println(" - Subtrair os numeros");
        System.out.println(" * Multiplicar os numeros");
        System.out.println("==== Escolha uma opção ====");

        String oper = entrada.next();

        switch (oper) {
            case "+":
                double soma = num1 + num2;
                System.out.println("Você escolheu adição");
                System.out.println("O resultado de " + num1 + " + " + num2 + " = " + soma);
                break;
            case "-":
                double sub = num1 - num2;
                System.out.println("Você escolheu subtração");
                System.out.println("O número " + num1 + " - " + num2 + " = " + sub);
                break;
            case "*":
                double mult = num1 * num2;
                System.out.println("Você escolher multiplicação");
                System.out.println("O resultado de " + num1 + " * " + num2 + " = " + mult);
                break;
            default:
                System.out.println("Operação não disponível ou invalida");
        }
        entrada.close();
    }
}