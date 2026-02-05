#include <iostream>
#include <fstream>
#include <string>
int main()
{
    std::ofstream file;
    std::string data;
    file.open("hello.txt",std::ios::app);

    if (file.is_open())
    {

        std::cout << "write any data :" ;
        std::cin >> data;
        // std::getline(data,file);
        file << data << std::endl;
        file.close();
    }

    return 0;
}