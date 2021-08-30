import random
import string 
import pyperclip 


def copyFunction():     
    copy = input("Do you want to copy this password? \n 'y' for yes, 'n' for no!\n   ")

    if copy == "y":
        pyperclip.copy(newString)
        exit()
    else: 
        exit()

print("------------\n   RANDOM\n  PASSWORD\n  GENERATOR\n------------\n")

createModus = input("Do you want to\n'random' - Create a completely random password\n'words'  - Use real words (letters-only) to create the password\n   ")

if createModus == 'random':

    passwordLength = int(input("Please, how many chars do you want?\n   "))

    charList = []

    letters = string.ascii_letters
    for letterPos in range(0, len(letters)):
        charList.append(letters[letterPos])


    for numberPos in range(0, 9):
        charList.append(str(numberPos))

    symbols = string.punctuation
    for symbolPos in range(0, len(symbols)):
        charList.append(symbols[symbolPos])

    random.shuffle(charList)

    lastString = ""
    newString = ""
    for i in range(0, passwordLength):
        newString = lastString + charList[i]
        lastString = newString
        i += 1

    print(newString)

    copyFunction()


if createModus == 'words':
    
    upperCase = string.ascii_letters
    lettersArray = []
    for letterPos in range(0, len(upperCase)):
        lettersArray.append(upperCase[letterPos])
    lettersArray.append(' ')

    leetLetters = ['4', '8', 'C', 'D', '3', 'F', '6', 'H', '1', 'J', 'K', 'L', 'M', 'N', '0', 'P', '9', 'R', '$', '7', 'U', 'V', 'vv', 'X', 'U', '2', '@', 'b', 'c', 'cl', '&', 'f', '₢', 'h', 'i', 'j', 'I<', 'l', 'm', 'n', 'O', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-']

    requestedWords = input('Now, tell me the words that you want to use:\n   ')

    rWArray = []
    for i in range(0, len(requestedWords)):
        rWArray.append(requestedWords[i])

    lastString = ""
    newString = ""
    for pos in range(0, len(requestedWords)):
        randomNumber = random.randint(0, 9)
        if lettersArray.index(rWArray[pos]) <= 25:
            indexOfChar = lettersArray.index(rWArray[pos])
        elif lettersArray.index(rWArray[pos]) > 25:
            indexOfChar = lettersArray.index(rWArray[pos]) - 26
        if indexOfChar == 52 or randomNumber <= 4:
            newString = lastString + leetLetters[indexOfChar]
        elif randomNumber >= 5: 
            newString = lastString + leetLetters[indexOfChar + 26]
        lastString = newString

    print(newString)

    print(lettersArray.index('z'))

    copyFunction()

else:
    print("\nYou said wrong values. Good bye!\n")
    exit()
