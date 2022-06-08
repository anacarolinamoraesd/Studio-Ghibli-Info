public class ForWhile {
    public static void main(String[] args) {

        int contFor, contWhile;

        for (contFor = 0; contFor < 5; contFor++)
            System.out.println("Valor do ContFor: " + contFor);

        contWhile = 0;

        while (contWhile < 5) {
            System.out.println("Valor do ContWhile: " + contWhile);
            contWhile++;
        }
    }
}
