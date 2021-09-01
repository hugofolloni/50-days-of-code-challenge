import random
import time

def runApp():
    frase = input("Me diga a frase que quer usar:\nPS: quanto maior a frase, mais tempo o algoritmo demorará!\n   ");
    inicio = time.time()
    fraseArray = frase.split(' ')
    lettersArray = []

    for i in range(len(fraseArray)):
        for x in range(len(fraseArray[i])):
            lettersArray.append(fraseArray[i][x])

    print(lettersArray)
    anagramArray = []

    for l in range(0, 1000000):
        shuffle = random.sample(lettersArray, len(lettersArray))
        if shuffle not in anagramArray:
            anagramArray.append(shuffle)

    fim = time.time()
    tempoDeExecucao = fim - inicio
    print("Nós achamos {} anagramas em {:.3f} segundos".format(len(anagramArray), tempoDeExecucao))

    for x in range(0, len(anagramArray)):
        x = "".join(anagramArray[x])
        print(x)

    return again()

def again():
    againWant = input("Voce quer rodar de novo?\n'y' para sim, 'n' para não\n   ")

    if againWant == 'y':
        return runApp()
    else:
        exit()

runApp()


