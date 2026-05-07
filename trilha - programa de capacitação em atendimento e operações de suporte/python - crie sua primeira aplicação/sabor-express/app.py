import os

#lista
restaurantes = [{'nome': 'Sushi Maruto', 'categoria':'Japonesa', 'status': True}, 
                {'nome': 'Cantina Italia', 'categoria':'Italiano', 'status': False},
                {'nome': 'Paella Sabore', 'categoria':'Argentina', 'status': True}]
# com o uso dos dicionarios {}, consigo manter informações de um objeto, neste caso restaurante, como nome, categoria, se esta aberto ou nao...
# basicamente, qunaod se trata de dicionario, falamos de chave-valor

def exibir_nome_programa():
    print("""
 
░██████╗░█████╗░██████╗░░█████╗░██████╗░  ███████╗██╗░░██╗██████╗░██████╗░███████╗░██████╗░██████╗
██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗  ██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝
╚█████╗░███████║██████╦╝██║░░██║██████╔╝  █████╗░░░╚███╔╝░██████╔╝██████╔╝█████╗░░╚█████╗░╚█████╗░
░╚═══██╗██╔══██║██╔══██╗██║░░██║██╔══██╗  ██╔══╝░░░██╔██╗░██╔═══╝░██╔══██╗██╔══╝░░░╚═══██╗░╚═══██╗
██████╔╝██║░░██║██████╦╝╚█████╔╝██║░░██║  ███████╗██╔╝╚██╗██║░░░░░██║░░██║███████╗██████╔╝██████╔╝
╚═════╝░╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝  ╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═════╝░╚═════╝░
""") # posso quebrar uma linha ou pular com aspas triplas e e definir qunatas linhas serão puladas com a quebra de linha

def voltar_ao_menu():
    input('\nDigite uma tecla para voltar ao menu principal ')
    main() #aqui o main limpa todas as mensagens e volta para o menu principal

def finalizar_app():
    # os.system('clear') #esse import mexecom o sistema peracional e como eu uso o terminal do bash, eu uso o clear
    # print('Finalizando o app\n')
    exibir_subtitulo('Finalizando o app')

def opcao_invalida():
    print('\nOpção inválida!')
    voltar_ao_menu()

def exibir_subtitulo(texto):
    os.system('clear')
    linha = '*' * (len(texto))
    print(linha)
    print(texto)
    print(linha)
    print()

# exibir infos
def exibir_opcoes(): 
    print('1.  Cadastrar restaurante')

    print('2.  Listar restaurante')
    print('3.  Alternar estado do restaurante')
    print('4.  Sair\n')

def cadastrar_resturante():
    ''' Esta função é responsvel or cadastrar um novo restaurante '''  #<-- doc string

    '''
    Inputs:
    - nome do restaurante
    - categoria
    
    Outputs:
    - Adiciona um novo restaurante à lista de restaurantes
    '''
    exibir_subtitulo('Cadastro de novos restaurantes')
    nome_restaurante = input('Digite o nome do restaurante que deseja cadastrar: \n')
    categoria = input(f'Digite a categoria do restaurante {nome_restaurante}: \n')
    dados_do_restaurante = {'nome': nome_restaurante, 'categoria': categoria, 'status': False}
    restaurantes.append(dados_do_restaurante)
    #agora o append(nome_restaurante fica em desuso, pois agora eu crio um dicionario com dados_do_resturantre e faço o append)
    restaurantes.append(nome_restaurante) #append é semelhante ao push para colocar dentro de uma lista
    print(f'Nome do restaurante escolhido: {nome_restaurante}. \n{nome_restaurante} foi cadastrado com sucesso!\n')
    voltar_ao_menu()

def listar_restaurantes():
    exibir_subtitulo('Listando restaurantes...\n')
    print(f'{'Nome do restaurante'.ljust(22)} | {'Categoria'.ljust(20)} | Status\n')
    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome']
        categoria_restaurante = restaurante['categoria']
        # status_restaurante = restaurante['status']
        status_restaurante = 'ativado' if restaurante['status'] else 'desativado'
        print(f'- {nome_restaurante.ljust(20)} | {categoria_restaurante.ljust(20)} | {status_restaurante} ')
        # print(f'.{restaurante}') aqui mostra tudo indiscriminadamente

    voltar_ao_menu()

def alterar_status_restaurante():
    exibir_subtitulo('Alterar Status do restaurante')
    nome_restaurante = input('Digite o nome do restaurante que deseja alterar o status \n')
    restaurante_encontrado = False

    for restaurante in restaurantes:
        if nome_restaurante == restaurante['nome']:
            restaurante_encontrado = True
            restaurante['status'] = not restaurante['status'] # o not inverte o vlaor booleano, se estiver True, fica false, etc
            mensagem = f'O restaurante {nome_restaurante} foi ativado com sucesso!' if restaurante['status'] else f'O restaurante {nome_restaurante} foi desativado com sucesso!'
            print(mensagem) #aqui foi utilizado o uso do ternario
    if not restaurante_encontrado:
        print('O restaurante não foi encontrado!')    
        voltar_ao_menu() 


# inserir infos
def escolher_opcao():
    try: #validação na condicional com try except, tipo try catch
        opcao_escolhida = int (input('Escolha uma opção: \n'))# por padrão o input do python espera uma str (string), entao defino como int
        print('Você escolheu  a opção: ', opcao_escolhida) # print(f'Você escolher a opção: {opcao_escolhida}') <- melhor forma de fazer interpolação
        if opcao_escolhida == 1:
            cadastrar_resturante()
        elif opcao_escolhida == 2:
            listar_restaurantes()
            
        elif opcao_escolhida == 3:
            alterar_status_restaurante()
        elif opcao_escolhida == 4:
            finalizar_app()
        # else:
            # opcao_invalida() vou desativar porque ele fica capturandoopçao invalida sempre
    except:
        opcao_invalida()

def main():
    exibir_nome_programa()
    exibir_opcoes()
    escolher_opcao()

if __name__ == '__main__':
    main()

