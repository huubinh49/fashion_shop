#include <iostream>
#include <cstring>
using namespace std;

void hanoiTower(int N, char A, char B, char C){
    if(N==1){
        cout << A << "-->" << C << endl;
    }else{
        hanoiTower(N-1, A, C, B);
        cout << A << "-->" << C << endl;
        hanoiTower(N-1, B, A, C);
    }
}

struct chess{
    int x;
    int y;
};
bool check8Hau(chess arr[], int size_arr, int x, int y){
    for(int i =0; i< size_arr; i++){
        if(arr[i].x == x||arr[i].y==y)    
         return false;
        if(arr[i].x-x == arr[i].y-y)
        return false;
        if(arr[i].x-x == -(arr[i].y-y))
        return false;
    }
    return true;
}
void print(chess arr[]){
    int arrRes[9][9];
    for(int i =0; i<9;i++)
        for(int j =0; j<9;j++)arrRes[i][j]=0;
    for(int i =0; i<9;i++){
        arrRes[arr[i].x][arr[i].y]=8;
    }
    for(int i =0; i<9;i++){
        for(int j = 0; j<9;j++){
            cout << arrRes[i][j] << " ";
        }
        cout << endl;
    }
}

void putHau(chess arr[], int curRow){
    
    if(curRow==9){
        print(arr);
        cout << endl;
        return;
    }
    if(curRow<9){
        for(int i = 0; i<9;i++){
            if(check8Hau(arr, curRow, curRow, i)){
                chess H{curRow, i};
                arr[curRow] = H;
                putHau(arr, curRow+1);
            }
        }
        return;
    }
}
bool chechMa(int chessBoard[][9])
int movex[] = {2, 2, 1, -1, -2, -2, -1, 1};
int movey[]= {1, -1, -2, -2,-1, 1, 2, 2 };
void putMa(int curMove, int chessBoard[][9], int x, int y){
    if(curMove == 64){
        for(int i =0; i<9;i++){
        for(int j = 0; j<9;j++){
            cout << chessBoard[i][j] << " ";
        }
        cout << endl;
        }
        return;
    }else{
        for(int i =0; i<8;i++){
            if
        }
    }
}
int main(){
 
    return 0;
}