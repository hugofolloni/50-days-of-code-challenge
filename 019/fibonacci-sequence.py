print("-----------\n FIBONACCI\n-----------")

parameters = int(input("Tell me the length of your wanted Fibonacci sequence?\n   "))

fibArray = [0, 1]

def fibonacciCalculator():
    penultimo = fibArray[-2]
    ultimo = fibArray[-1]
    newNumber = penultimo + ultimo
    fibArray.append(newNumber)

for i in range(0, parameters):
    fibonacciCalculator()

beautifulArray = (", ".join(map(str, fibArray)))

print(beautifulArray)
