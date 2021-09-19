#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <conio.h>

int main() {
   int shuffled[10] = {}, j;
   char asters[10] = " * * * * * * * * * *";

   j = rand() % 9;
   int i;
   for (i = 0; i < 10; i++){
      j = rand() % 9;
      shuffled[i] = j;
      printf(" %d ", j);
   };
   sleep(5);
   system("cls");
   printf("%s", asters);
}