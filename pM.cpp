// #include <iostream>
// #include <string>

// using namespace std;
//  // namespace std;


// string countBrace(string brace){
//     int count = 0;
//     int count1 = 0;
//     string flag = "YES";
//       for(int i = 0 ; i < brace.size() ; i++){
//         if(brace[i] == '('){
//             count++;
//         }else{
//             count1++;
//         }
//       }
//       if(count == count1){
//         flag = "YES";
//       }
//       else{
//         flag = "NO";
//       }
//       return flag;
// }
// int main(){
//     string str = "";
//     cout<<"Enter a String :"<<endl;
//     cin>>str;
//     string count = countBrace(str);
//     cout<<"The number of braces in the string is : "<<count<<endl;

//     return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// void solve() {
//     int n;
//     cin >> n;

//     string s;
//     cin >> s;

//     int open = 0;
//     int close = 0;

//     for (char ch : s) {
//         if (ch == '(') {
//             open++;
//         } else {
//             close++;
//         }
//     }

//     if (open == close) {
//         cout << "YES\n";
//     } else {
//         cout << "NO\n";
//     }
// }

// int main() {
//     ios::sync_with_stdio(false);
//     cin.tie(nullptr);

//     int t;
//     cin >> t;

//     while (t--) {
//         solve();
//     }

//     return 0;
// }

#include <iostream>
#include <vector>

void mex()
{
  int n;
  std::cin >> n;

   std::vector<int> arr(n);
  for (int i = 0; i < n; i++)
  {
    std::cin >> arr[i];
  }
  int count = 0;
  int max = arr[0];
  for (int i = 1; i <= n; i++)
  {
    if (arr[i] == 0)
    {
      count++;
    }
    max = max < arr[i] ? arr[i] : max;
  }

  if(count == 0){
    std::cout<<count<<std::endl;
  }else{
    std::cout<<max+1<<std::endl;
  }
}

int main(){
  mex();
  return 0;
}