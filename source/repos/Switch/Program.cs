// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


int totalJugador = 0;
int totalDealer = 0;
string message = "";
string switchControl = "menu";

// Blackjack, juntar 21 pidiendo cartas o en caso de tener menor
// de 21 igual tener mayor puntuacion que el dealer

switch (switchControl)

{
    case "menu":
        Console.WriteLine("WELCOM AL CASINO");
        Console.WriteLine("Escriba 21 para jugar al 21");
        switchControl = Console.ReadLine();
        break;


    case "21":

        do
        {   System.Random random = new System Random();
            num = Random.Next(1, 12);
        totalJugador = totalJugador + num;
        Console.WriteLine("Toma tu carta, jugador te salio la carta ");
        Console.WriteLine ($"Te salió el numero: {NotFiniteNumberException} ")
        Console.WriteLine("Deseas otra carta?");



} while (Console.ReadLine() == "Otra Carta") ;
            if (totalJugador > totalDealer && totalJugador < 22)
        { message = "Venciste al dealer, felicidades"; }
        switchControl = "menu";


        else if (totalJugador < totalDealer)
        { message = "Perdiste vs el dealer, los siento"; }
        switchControl = "menu";

        else if (totalJugador <= totalDealer)
        { message = "Perdiste vs el dealer, los siento"; }
        switchControl = "menu";
       


        else { message = "Condicion no valida"; }



                Console.WriteLine(message);
        break;
        default:
        Console.WriteLine("Valor ingresa no válido en el CASINO ");
        break;
}