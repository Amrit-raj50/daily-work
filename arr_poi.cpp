#include <iostream>

int main(){
    int arr[6];

    for(int i = 0 ; i < sizeof(arr)/sizeof(arr[0]) ; i++){
        int *ptr = &arr[i];
        std::cout<<"enter the value:";
        std::cin>>*ptr;
    }

     for(int i = 0 ; i < sizeof(arr)/sizeof(arr[0]) ; i++){
        int *ptr = &arr[i];
        std::cout<<"using pointer:"<<*ptr<<std::endl;
    }
    return 0;
}