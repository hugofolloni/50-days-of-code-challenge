#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <conio.h>
#include <string.h>

int main() {
   int shuffled[10] = {}, j, l, k, i;
   char asters[20] = " * * * * * * * * * *", player[20] = "                   ";
   
   system("cls");

   for (i = 0; i < 10; i++){
      j = rand() % 9;
      shuffled[i] = j;
      printf(" %d ", j);
   };

   sleep(5);

   system("cls");

   printf("%s", asters);
   printf("\n\nMe fale a sequencia que voce lembra! Sem espacos, por favor!\n   ");
   scanf("%s", &player);

   system("cls");

   for(k = 0; k < 10; k++){
      printf(" %c ", player[k]);
   }
   for(l = 0; l < 10; l++){
      printf(" %d ", shuffled[l]);
   }
   printf("\nO primeiro e o seu chute, ja o segundo o real. Compare e veja quantos pontos fez!");
}