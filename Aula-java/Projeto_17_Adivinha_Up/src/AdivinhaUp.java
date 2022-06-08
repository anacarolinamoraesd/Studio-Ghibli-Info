import java.util.Scanner;
import java.util.Random;

public class AdivinhaUp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        Random rand = new Random();

        int palpite, num = 0;
        num = rand.nextInt(10) + 1;

        do {
            System.out.println("Digite seu palpite:");
            palpite = entrada.nextInt();
            if (palpite == num) {
                System.out.println("Você acertou");
            } else {
                if (palpite < num) {
                    System.out.println("Sue palpite esta abaixo");
                } else {
                    System.out.println("Seu palpite esta acima");
                }
            }
        } while (palpite != num);
        entrada.close();
    }
}
