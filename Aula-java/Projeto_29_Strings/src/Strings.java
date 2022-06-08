public class Strings {
    public static void main(String[] args) {
        String txt = "Ola pessoal do IOS";
        String myStr1 = "Hello";
        String myStr2 = "Hello";

        char result = txt.charAt(0);
        System.out.println("Char na posição zero: " + result);
        result = txt.charAt(10);
        System.out.println("Char na posição 10: " + result);

        System.out.println("Compara myStr1 com myStr2: " + myStr1.compareTo(myStr2));
        System.out.println("Compara txt com myStr2: " + txt.compareTo(myStr2));
        System.out.println("Compara myStr1 com txt: " + myStr1.compareTo(txt));

        System.out.println("Verifica inicio da string txt:" + txt.startsWith("Ola"));
        System.out.println("Verifica início da string txt: " + txt.startsWith("O"));
        System.out.println("Verifica início da string txt: " + txt.startsWith("o"));

        System.out.println("Verifica final da string txt: " + txt.endsWith("IOS"));
        System.out.println("Verifica final da string txt: " + txt.endsWith("S"));
        System.out.println("Verifica final da string txt: " + txt.endsWith("s"));
    }
}
