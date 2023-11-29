const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const novoLogin = document.getElementById("nome")
const novaSenha = document.getElementById("senhanova")
const repete = document.getElementById("senhadnv")

let usuarios = [];

function login() {

    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {

        // Lógica para verificar as credenciais de login
        for (let usuario of bancoDeDados) {
            if (usuario.login == campoLogin.value && usuario.senha == campoSenha.value) {
                mensagem = "Logado com sucesso!"
                localStorage.setItem("logado", JSON.stringify(usuario))

                window.location.href = "./Pgprincipal/index.html";
                break
            }
        }
        alert(mensagem);
    }
}