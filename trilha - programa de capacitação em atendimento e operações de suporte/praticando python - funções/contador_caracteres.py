def contar_carateres(palavra):
    return len(palavra)

texto = input('Digite uma palavra: ')
print(f'Essa palavra tem {contar_carateres(texto)} caracteres')