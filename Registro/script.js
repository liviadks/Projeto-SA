const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const novoLogin = document.getElementById("nome")
const novaSenha = document.getElementById("senhanova")
const repete = document.getElementById("senhadnv")

let usuarios = [];


function cadastra() {
    if (novaSenha.value == repete.value) {
        if (novoLogin.value == "" || novaSenha.value == "") {
            alert("Os campos estão vazios!");
            
            return;
        }

        const usuario = {
            login: novoLogin.value,
            senha: novaSenha.value
        };

        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        
        for (let i = 0; i < bancoDeDados.length; i++) {
            if (bancoDeDados[i].login == usuario.login) {
                alert("Usuário já cadastrado!");
                return;
            }
        }

        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "../index.html"
    } else {
        alert("As senhas não conferem!");
    }
}