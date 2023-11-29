//  Deixa bonitinho
const login = JSON.parse(localStorage.getItem('logado'));

const nome = login.login;

document.getElementById('titulo').innerHTML = `Bem vindo, ${nome}! <br>
Para começar, escolha a cor do seu gato.`;


window.onload = function() {
  mostrarImagem('inicial');
};




function mostrarImagem(cor) {
  const imagemGato = document.getElementById('imagemGato');
  let imagemSrc = '';

  switch (cor) {
    case 'branco':
      imagemSrc = 'branco.png';
      break;
    case 'preto':
      imagemSrc = 'preto.png';
      break;
    case 'frajola':
      imagemSrc = 'frajola.png';
      break;
    case 'laranja':
      imagemSrc = 'laranja.png';
      break;
    case 'tricolor':
      imagemSrc = 'tricolor.png';
      break;
    case 'siames':
      imagemSrc = 'siames.png';
      break;
    default:
      imagemSrc = 'marrom2.png';
  
  }
  

  imagemGato.innerHTML = `<img src="${imagemSrc}" alt="Gato ${cor}">`;

    sessionStorage.setItem('avatarEscolhido', imagemSrc);
  }


function sair() {
  localStorage.removeItem('logado');
  window.location.href = '../index.html';
}


