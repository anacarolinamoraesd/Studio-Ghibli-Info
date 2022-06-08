public class ForWhile2 {
    public static void main(String[] args) {

        int contadorFor, contadorWhile;

        for(contadorFor = 10; contadorFor > 0; contadorFor--)
            System.out.println(contadorFor);

        System.out.println(""); //so p/ separar os dois comandos
        contadorWhile = 10;

        while (contadorWhile > 0) {
            System.out.println(contadorWhile);
            contadorWhile--;
        }
    }
}
