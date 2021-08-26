import os

letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', '1', '2', '3', '4','5','0', '1', '2', '3', '4','5','6','7','8','9','0', '1', '2', '3', '4','5','6','7','8','9','0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

def back():
    print("\nAgora que já fizemos o trabalho, o que deseja fazer?")
    doIt = input("1. Voltar ao menu.\n2. Fechar aplicação.\n")
    if doIt == '1':
        return menu()
    elif doIt == '2':
        exit()

def encoder():
    toEncode = input("O que você quer codificar?     ")
    toEncodeShift = int(input("Qual a razão de encriptação?     "))  % 26
    encodeArray = list(toEncode)
    i = 0
    while i < len(encodeArray):
        position = (letters.index(encodeArray[i])) + 26
        positionShifted = position + toEncodeShift
        encodeArray[i] = letters[positionShifted]
        i += 1
    print("Sua cifra ficou:\n")
    print("".join(map(str, encodeArray)))
    return back()

def decoder():
    toDecode = input("O que você quer decodificar?     ")
    decodeArray = list(toDecode)
    shiftKnown = input("Voce conhece a razão de decodificação? Se sim 'y', se não 'n'!     ")
    if shiftKnown == 'y':
        toDecodeShift = int(input("Qual é a razão de decodificação?     ")) % 26
        i = 0
        while i < len(decodeArray):
            position = (letters.index(decodeArray[i])) + 26
            positionShifted = position - toDecodeShift
            decodeArray[i] = letters[positionShifted]
            i += 1
        print("Sua cifra ficou:\n")
        print("".join(map(str, decodeArray)))
    if shiftKnown == "n":
        print("Vamos à força bruta!\nSeu código pode ser...")
        for i in range(0, 26): # Fica repetindo o mesmo numero :c
            j = 0
            while j < len(decodeArray):
                position = (letters.index(decodeArray[j]))
                positionShifted = position + 1
                decodeArray[j] = letters[positionShifted]
                j += 1
            print("".join(map(str, decodeArray)))

    return back()

def menu():
    os.system('cls' if os.name == 'nt' else 'clear')
    do = input("Olá, eu sou seu decodificador de Cifra de César. O que deseja fazer?\n1.Encriptar\n2.Decodificar\n")
    if do == '1':
        return encoder()
    elif do == '2':
        return decoder()

menu()