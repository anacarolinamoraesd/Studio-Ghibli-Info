import java.util.Scanner;
import java.util.Random;

public class AdivRandom {
    public static void main(String [] args) {
        Scanner entrada = new Scanner(System.in);
        Random rand = new Random();
        int palpite, num = 0;
        num = rand.nextInt(10) + 1;
        System.out.println("Digite o seu palpite: ");
        palpite = entrada.nextInt();
        if (palpite == num) {
            System.out.println("Você acertou! O número era " + num);
        } else {
            if (palpite < num) {
                System.out.println("Seu palpite está abaixo. O número era " + num);
            } else {
                System.out.println("Seu palpite está acima. O numero era " + num);
            }
        }
        entrada.close();
    }
}
