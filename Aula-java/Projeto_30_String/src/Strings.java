public class Strings {
    public static void main(String[] args) {
        String txt = "Ola aa Pessoal aa do aa IOS";
        String txt2 = "";
        String txt3 = "          OI!         ";

        System.out.println("String txt1 esta vazia? " + txt.isEmpty());
        System.out.println("String txt2 esta vazia? " + txt2.isEmpty());

        System.out.println("última posição do aa: " + txt.lastIndexOf("aa"));

        String txt4 = txt.replace('a', 'x');
        System.out.println(txt4);

        System.out.println("String original: " + txt3);
        System.out.println("String sem espaços: " + txt3.trim());
    }
}
