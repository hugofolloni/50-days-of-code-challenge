import random
import time

playerList = []

rodadas = 0

somaPlayer = 0

def getCard():
    global rodadas
    rodadas += 1
    cardNumber = random.randint(1, 52)
    cardValue = (cardNumber % 13) + 1
    if cardValue == 11:
        cardName = 'Valete'
    elif cardValue == 12: 
        cardName = 'Dama'
    elif cardValue == 13:
        cardName = 'Rei'
    else:
        cardName = cardValue 
    if cardValue > 10:
            cardValue = 10
    if cardNumber < 14:
        cardNaipe = 'Ouro'
    if cardNumber >= 14 and cardNumber < 27:
        cardNaipe = 'Copas'
    if cardNumber >= 27 and cardNumber < 40:
        cardNaipe = 'Espadas'
    if cardNumber >= 40:
        cardNaipe = 'Paus'
    print(f"\n\nVocê recebeu {cardName} de {cardNaipe}. Você fez {cardValue} pontos!")
    playerList.append(cardValue)

    ### POR ALGUM MOTIVO TENHO Q DEFINIR A SOMA PLAYER TODA VEZ
    somaAntigaPlayer = 0
    for i in range(len(playerList)):
        somaPlayer = somaAntigaPlayer + int(playerList[i])
        somaAntigaPlayer = somaPlayer

    print(f"Você está somando {somaPlayer} pontos.\n")
    time.sleep(0.5)
    if somaPlayer < 21:
        playerChoice()
    elif somaPlayer == 21 and rodadas == 2:
        print('BLACKJACK\n\n')
    elif somaPlayer == 21 and rodadas != 2:
        print("Você chegou ao 21. PARABÉNS!!!\n\n")
    else: 
        print("PASSOU! Você perdeu!\n\n") 

def playerChoice():

    ### POR ALGUM MOTIVO TENHO Q DEFINIR A SOMA PLAYER TODA VEZ
    somaAntigaPlayer = 0
    for i in range(len(playerList)):
        somaPlayer = somaAntigaPlayer + int(playerList[i])
        somaAntigaPlayer = somaPlayer

    choice = input("O que deseja fazer?\n'pedir' ou 'parar'\n     ")
    if choice == 'pedir':
        getCard()
    else:
        print(f"\nVocê parou e sua pontuação final foi {somaPlayer}.")
        time.sleep(1)
        print("\n\nHora do dealer jogar!\n")
        time.sleep(2)
        dealerGame()

def dealerGame():
    somaDealer = 0
    somaAnteriorDealer = 0
    while somaDealer <= 21:
        dealerCard = random.randint(1, 13)
        if dealerCard > 10:
            dealerCard = 10
        somaDealer = somaAnteriorDealer + dealerCard
        somaAnteriorDealer = somaDealer
    somaDealer = somaAnteriorDealer - dealerCard

    ### POR ALGUM MOTIVO TENHO Q DEFINIR A SOMA PLAYER TODA VEZ
    somaAntigaPlayer = 0
    for i in range(len(playerList)):
        somaPlayer = somaAntigaPlayer + int(playerList[i])
        somaAntigaPlayer = somaPlayer

    print(f"A soma do dealer foi {somaDealer}.\n\n")
    if somaPlayer > somaDealer: 
        print(f"##### VOCÊ GANHOU! #####\n\nSua pontuação: {somaPlayer}\nPontuação do dealer: {somaDealer}\n\n $$$$$$$$$$$$$$$$$\n\n")
    if somaPlayer == somaDealer:
        print(f"##### TEMOS UM EMPATE! #####\n\nSua pontuação: {somaPlayer}\nPontuação do dealer: {somaDealer}\n\n        ;-;\n\n")
    if somaPlayer < somaDealer:
        print(f"##### VOCÊ PERDEU! #####\n\nSua pontuação: {somaPlayer}\nPontuação do dealer: {somaDealer}\n\n         :(\n\n")


print('\n\n-------------\n  BLACKJACK  \n-------------\n\n')
input('Aperte enter para começar!')

getCard()

time.sleep(1)

input("Aperte enter para sair!\n")

time.sleep(0.5)

exit()
