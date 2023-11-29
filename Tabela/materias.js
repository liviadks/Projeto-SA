
// Declarando variáveis globais
let alunos = [];

// Evento disparado quando o DOM é carregado
document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar dados na tabela
    carrega();

    // Elementos do modal novo cliente
    let btnNovoAluno = document.getElementById("btnNovoAluno");
    let modalNovoAluno = document.getElementById("modalNovoAluno");
    let spanNovoAluno = modalNovoAluno.querySelector(".close");

    // Configurando eventos do modal novo cliente
    btnNovoAluno.onclick = function () {
        modalNovoAluno.style.display = "block";
    };

    spanNovoAluno.onclick = function () {
        modalNovoAluno.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modalNovoAluno) {
            modalNovoAluno.style.display = "none";
        }
    };

    // Adicionando eventos aos botões da tabela
    let botoes = document.querySelectorAll('.btn-info');
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].onclick = function () {
            modal(this);
        };
    }
});

// Função para identificar cliente por placa
function identifica(materia) {
    for (let aluno of alunos) {
        if (aluno.materia === materia.id) {
            return aluno;
        }
    }
    return null;
}

// Função para exibir modal de informações do cliente
function modal(button) {
    let aluno = identifica(button);

    let modal = document.getElementById("myModal");

    if (!modal) {
        console.error("Elemento 'myModal' não encontrado no DOM");
        return;
    }

    let span = modal.querySelector(".close");
    if (!span) {
        console.error("Elemento 'close' não encontrado no DOM");
        return;
    }

    // Elementos do modal de informações do cliente
    let materiaModal = modal.querySelector("#materiasModal");
    let nomeAtividadeModal = modal.querySelector("#nomeAtividadeModal");
    let prazoModal = modal.querySelector("#prazoModal");
    let adendosModal = modal.querySelector("#adendosModal");
    let btnExcluirAluno = modal.querySelector("#btnExcluirAluno")
    
    if (!materiaModal || !nomeAtividadeModal || !prazoModal || !adendosModal || !btnExcluirAluno) {
        console.error("Elementos não encontrados no DOM");
        return;
    }

    // Preenchendo informações no modal
    materiaModal.innerHTML = aluno.materia;
    nomeAtividadeModal.innerHTML = aluno.nomeAtividade;
    prazoModal.innerHTML = aluno.prazo;
    adendosModal.innerHTML = aluno.adendos;
   
    // Configurando o botão de excluir
    btnExcluirAluno.onclick = function () {
        excluirAluno(aluno.materia);
        modal.style.display = "none";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    modal.style.display = "block";
}

// Função para excluir cliente
function excluirAluno(materia) {
    alunos = alunos.filter(aluno => aluno.materia !== materia);
    localStorage.setItem("alunos", JSON.stringify(alunos));
    carrega();
}

// Função para carregar dados na tabela
function carrega() {
    let tabela = document.getElementById("alunos");
    alunos = JSON.parse(localStorage.getItem("alunos")) || [];

    tabela.innerHTML = "";

    for (let aluno of alunos) {
        let botaoid = `<td><button id='${aluno.materia}' class='btn-info'>Mais info</button></td>`;
        let linha = `<tr>
            <td class="aaa">${aluno.materia}</td>
            <td class="aaa">${aluno.nomeAtividade}</td>
            <td class="aaa">${aluno.prazo}</td>
            ${botaoid}</tr>`;
        tabela.innerHTML += linha;
    }

    // Adicionando eventos aos botões da tabela
    let botoes = document.querySelectorAll('.btn-info');
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].onclick = function () {
            modal(this);
        };
    }
}

// Função para cadastrar novo cliente
function cadastrarAluno() {
    let materia = document.getElementById("materia").value;
    let nomeAtividade = document.getElementById("nomeAtividade").value;
    let prazo = document.getElementById("prazo").value;
    let adendos = document.getElementById("adendos").value;

  

    // Verifica se a placa já está cadastrada
    if (alunoExistente(nomeAtividade)) {
        alert("Esta atividade já foi registrada.");
        return;
    }

    let novoAluno = {
        materia: materia,
        nomeAtividade: nomeAtividade,
        prazo: prazo,
        adendos: adendos
    };

    alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    alunos.push(novoAluno);

    // Salva no localStorage
    localStorage.setItem("alunos", JSON.stringify(alunos));

    // Recarrega a tabela após cadastrar um novo cliente
    carrega();

    // Esconde o modal de novo cliente
    modalNovoAluno.style.display = "none";
}

// Função para verificar se o cliente já existe
function alunoExistente(materia) {
    return alunos.some(aluno => aluno.materia === materia);
}

function voltar(){
    window.location.href = '../Pgprincipal/index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // Recuperar a escolha do avatar do sessionStorage
    const avatarSalvo = sessionStorage.getItem('avatarEscolhido');
  
    // Verificar se há um avatar selecionado
    if (avatarSalvo) {
      const avatarElement = document.createElement('img');
      avatarElement.src = '../Pgprincipal/Imagens/' + avatarSalvo;
      avatarElement.style.maxWidth = '0 auto';
      document.getElementById('avatarSelecionado').appendChild(avatarElement);
    } else {
      // Se não houver avatar selecionado, exibir mensagem
      document.getElementById('avatarSelecionado').innerText = 'Nenhum avatar selecionado.';
    }
  });
  