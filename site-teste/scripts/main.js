// Codigo para mudar a imagem quando clica

let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/rpa-logo.jpg') {
      minhaImagem.setAttribute ('src','imagens/rpa-logo3.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/rpa-logo.jpg');
	}
}
//Fim do codigo troca imagem


//Inicio da mensagem personalizada com nome

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
	
  let meuNome = prompt('Por favor, digite seu nome.');
  localStorage.setItem('nome', meuNome);
  
}if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'RPA é divertido, ' + nomeGuardado;
}

  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'RPA é divertido, ' + meuNome;
  }
}meuBotao.onclick = function() { defineNomeUsuario();}