#include <iostream>
#include <string>
int main()
{
	int a;

	std::cout<<"Introduce la tabla que deseas Calcular\n";
	std::cin>>a;


    for(int i=4;i<10;i++){
        std::cout<<(i+1)<<" x "<<a<<" = "<< ((i+1)*a)<<::std::endl;
        
    }
	return 0;
}
