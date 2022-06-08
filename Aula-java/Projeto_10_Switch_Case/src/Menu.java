import java.util.Scanner;

public class Menu {
    public static void main( String [] args) {

        System.out.println("======= Menu de opcoes =======");
        System.out.println(" 1 - Cadastrar Produtos ");
        System.out.println(" 2 - Listas Produtos ");
        System.out.println(" 3 - Sair do sistema ");
        System.out.println("======= Escolha uma opcao =======");

        Scanner entrada = new Scanner(System.in);
        int menu = entrada.nextInt();

        switch (menu) {
            case 1:
                System.out.println("voce escolheu o menu 1 ");
                System.out.println("que eh a opcao Cadastrar Produtos");
                break;
            case 2:
                System.out.println("Voce escolheu o menu 2 ");
                System.out.println("Que eh a opcao Listar Produtos");
                break;
            case 3:
                System.out.println("Voce escolheu o menu 3 ");
                System.out.println("que eh a opcao Sair do Sistema");
                break;
            default:
                System.out.println("Item de menu invalido");
        }
        entrada.close();
    }
}
