

def calcular_idade(ano_nascimento, ano_atual):
    return ano_atual - ano_nascimento
    
nascimento = int(input('Digite seu ano de nascimento\n'))
atual = int(input('Digite o ano atual\n'))

idade = calcular_idade(nascimento, atual)

print(f'A idade é: {idade} anos')

