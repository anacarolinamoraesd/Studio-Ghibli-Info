import java.util.Scanner;

public class Exemplo2Matiz {
    public static void main(String[] args) {
        Scanner teclado = new Scanner (System.in);

        int[][] numeros = new int[2][2];
        int somaLinhas = 0, total = 0;

        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                System.out.println("Digite um numero para a posição [" + i + "][" + j + "]: ");
                numeros[i][j] =  teclado.nextInt();
            }
        }
        for (int i = 0; i < numeros.length; i++) {
            somaLinhas = 0;
            for (int j = 0; j < numeros[i].length; j++) {
                somaLinhas += numeros[i][j];
            }
            System.out.println("A soma da linha [" + i + "] é: " + somaLinhas);
            total += somaLinhas;
        }
        System.out.println("O somatorio dos elementos da matriz é: " + total);

        System.out.println("=================================================");
        System.out.println("|              Elementos da Matriz              |");
        System.out.println("=================================================");

        for (int i = 0; i < numeros.length; i++) {
            for ( int j = 0; j < numeros[i].length; j++) {
                System.out.print(numeros[i][j] + "\t");
            }
            System.out.println("");
        }
        teclado.close();
    }
}
