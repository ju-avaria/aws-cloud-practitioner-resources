def es_primo(numero):
    """
    Determina si un número es primo.
    Devuelve True si es primo y False si no lo es.
    """

    # Los números menores que 2 no son primos
    if numero < 2:
        return False

    # Comprobamos si existe algún divisor
    for divisor in range(2, numero):
        if numero % divisor == 0:
            return False

    return True


# Abrimos el archivo donde guardaremos los resultados
with open("results.txt", "w") as archivo:

    # Recorremos los números del 1 al 250
    for numero in range(1, 251):

        # Comprobamos si el número es primo
        if es_primo(numero):

            # Mostramos el número en pantalla
            print(numero)

            # Guardamos el número en results.txt
            archivo.write(str(numero) + "\n")
            

print("Proceso terminado.")
print("Los números primos fueron guardados en results.txt")