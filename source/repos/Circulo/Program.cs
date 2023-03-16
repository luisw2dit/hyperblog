// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");


var radio = 0d;
var resultado = 0d;

const double PI = 3.14;

Console.WriteLine("Bienvenidos calculemos circulos");

//pi*radio*radio

Console.WriteLine("Ingrese el valor del radio ");
radio = Convert.ToDouble(Console.ReadLine ());

resultado = PI * radio + radio;

Console.WriteLine("E area de tu circulo es de:  " + resultado);
