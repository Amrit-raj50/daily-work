#include <iostream>
#include <string>


int add(int a, int b)
{
    return (a + b);
}
int sub(int a, int b)
{
    return (a - b);
}
int mul(int a, int b)
{
    return (a * b);
}
float div1(int a, int b)
{
    return (a / b);
}
float mod(int a, int b)
{
    return (a % b);
}


int main()
{
    char choice;
    std::cout << "enter choice within(+,-,/,*,%): ";
    std::cin >> choice;
    int a;
    int b;
    std::cout << "enter a: ";
    std::cin >> a;
    std::cout << "enter b: ";
    std::cin >> b;
    switch (choice)
    {
    case '+':
        std::cout << "SUM : " << add(a, b) << std::endl;
        break;

    case '-':
        std::cout << "SUB : " << sub(a, b) << std::endl;
        break;

    case '*':
        std::cout << "MUL : " << mul(a, b) << std::endl;
        break;

    case '/':
        std::cout << "DIV : " << (div1(a, b)) << std::endl;
        break;

    case '%':
        std::cout << "DIV : " << (mod(a, b)) << std::endl;
        break;

    default:
        std::cout << "Invalid choice entered..... retry again ..!" << std::endl;
    }
}