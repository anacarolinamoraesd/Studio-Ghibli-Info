import java.util.Scanner;

public class ExemploIdade {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        int idade, acumuladorIdade = 0;
        int contador;

        for (contador = 0; contador < 5; contador++) {
            System.out.println("Digite sua idade");
            idade = entrada.nextInt();
            acumuladorIdade += idade;
        }
        System.out.println("A soma das idades é " + acumuladorIdade);
        entrada.close();
    }
}
