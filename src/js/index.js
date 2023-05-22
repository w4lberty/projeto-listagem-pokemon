// passo 1 - Pegar o elemento HTML correspondente ao botão

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - Pegar o elemento HTML correspondente ao body

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 - Identificar o clique do usuário no botão

botaoAlterarTema.addEventListener("click", () => {

    // passo 6 - Verificar se há a classe "modo-escuro" no body

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {

        // passo 7 - Se "modo-escuro" estiver ativo, remova

            //body.classList.remove("modo-escuro")

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
        imagemBotaoTrocaDeTema.setAttribute("alt", "imagem do sol")

    } else {

        // passo 4 - Criar a classe modo-escuro

            // body.classList.add("modo-escuro");

        // passo 5 - Alterar imagem do botão

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
        imagemBotaoTrocaDeTema.setAttribute("alt", "imagem da lua");

    }

});
