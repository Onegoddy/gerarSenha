document.querySelector('#btnSenha').addEventListener('click', () => {

    // recuperar o elemento html que recebera a senha
    getSenha = document.querySelector('#senha');
    const caracteres = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '&', '*', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    let novaSenha = '';

    // for para gerar a senha = 67 caracteres
    for (let i = 0; i < 30; i++) {
        // sortear um numero que representa o indice do array
        let numero = Math.round(Math.random() * 66);
        // montar a senha - atribuir o conteúdo do indice à variavel novaSenha
        novaSenha += caracteres[numero];

    };

    // exibindo a senha na página
    getSenha.textContent = novaSenha;
});

// função que copia a senha para a área de transferência
// document.execCommand('copy') seria a instrução mais comum foi substituida pela API da área de transferência, adicionada aos navegadores.Por ser uma API seus métodos são promise(),então podemos usar o await para fazer alguma coisa após a sua execução, para copiar o texto use o método writetext(copiar ARQUIVOS), sendo disponível no objeto navigator

document.querySelector('#btnCopia').addEventListener('click', () => {
    const senha = document.querySelector('#senha').innerText
    if (senha.length == 0) {
        alert('Precisa gerar a senha')
    } else {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(senha).then(() => {
                alert('Senha copiada')
            });
        }
    }
});