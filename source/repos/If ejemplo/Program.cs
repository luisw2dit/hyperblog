// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

int totalJugador = 10;
int totalDealer = 15;
string message = "";

// Blackjack, juntar 21 pidiendo cartas o en caso de tener menor
// de 21 igual tener mayor puntuacion que el dealer

if (totalJugador > totalDealer && totalJugador < 22)
{message = "Venciste al dealer, felicidades";}



else if (totalJugador < totalDealer)
{ message= "Perdiste vs el dealer, los siento";}

else { message = "Condicion no valida"; }

Console.WriteLine(message);




