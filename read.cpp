#include <iostream>
#include <fstream>
#include <string>
int main(){
     std::ifstream file;
     std::string data;
      file.open("hello.txt");
     if(file.is_open()){
        std::getline(file,data);
        std::cout<<data<<std::endl;
        file.close();
     }

     return 0;
}