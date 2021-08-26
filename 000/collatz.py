import random

def runApp():
    i = 0
    while i < 10:
        numeroInicial = random.randint(0, 10000)
        passagemAlgoritmo = 0
        print("Número inicial: {}\n".format(numeroInicial))
        print("{} ------> {:.0f}".format(passagemAlgoritmo, numeroInicial))
        while numeroInicial > 1:
            if numeroInicial % 2 == 1:
                novoNumero = (numeroInicial * 3) + 1
                numeroInicial = novoNumero
                passagemAlgoritmo += 1
                print("{} -----> {:.0f}".format(passagemAlgoritmo, novoNumero))
            elif numeroInicial % 2 == 0:
                novoNumero = (numeroInicial / 2)
                numeroInicial = novoNumero
                passagemAlgoritmo += 1
                print("{} -----> {:.0f}".format(passagemAlgoritmo, novoNumero))
        i += 1
        print("\n\n")
    return menu()

def chooseNumber():
    numeroInicial = int(input("Qual o número? "))
    passagemAlgoritmo = 0
    print("Número inicial: {}\n".format(numeroInicial))
    print("{} ------> {:.0f}".format(passagemAlgoritmo, numeroInicial))
    while numeroInicial > 1:
        if numeroInicial % 2 == 1:
            novoNumero = (numeroInicial * 3) + 1
            numeroInicial = novoNumero
            passagemAlgoritmo += 1
            print("{} ------> {:.0f}".format(passagemAlgoritmo, novoNumero))
        elif numeroInicial % 2 == 0:
            novoNumero = (numeroInicial / 2)
            numeroInicial = novoNumero
            passagemAlgoritmo += 1
            print("{} ------> {:.0f}".format(passagemAlgoritmo, novoNumero))
    print("\n\n")
    return menu()


def menu():
    continuar = input("O que deseja fazer?\n1. Utilizar números aleatórios\n2. Escolher um número para o algoritmo rodar\n3. Fechar programa\n")
    if continuar == "1":
        return runApp()
    if continuar == "2":
        return chooseNumber()
    if continuar == "3":
        exit()

menu()
    