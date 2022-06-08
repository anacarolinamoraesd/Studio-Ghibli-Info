import java.util.Locale;

public class Strings {
    public static void main(String[] args) {
        String txt = "Ola pessoal do IOS";

        System.out.println("O tamanho da string txt é:" +  txt.length());
        System.out.println(txt.toUpperCase());
        System.out.println(txt.toLowerCase());
        System.out.println(txt.indexOf("s"));
        System.out.println(txt.indexOf("IO"));
        System.out.println(txt.indexOf("io")); //mostra -1 pois nao encontra o valor
    }
}
