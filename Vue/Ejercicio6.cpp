
#include <iostream>
#include <string>

int main()
{
 	 // declaración de variables.
	double a, b, area;

	std::cout<<"Introduce la Altura de un triangulo\n";
	std::cin>>a;
	std::cout<<"Introduce la base del Triangulo\n";
	std::cin>>b;

	//Operaciones para sacar el area
	area = (b*a)/2;
	std::cout<<"El resultado del area es es:"<<area<<::std::endl;
	return 0;
}
