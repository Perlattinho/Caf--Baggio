let tamanhoFonte = 100; 
const tamanhoMin = 80;
const tamanhoMax = 150;

function alterarFonte(acao) {
  if (acao === 'aumentar' && tamanhoFonte < tamanhoMax) {
    tamanhoFonte += 10;
  } else if (acao === 'diminuir' && tamanhoFonte > tamanhoMin) {
    tamanhoFonte -= 10;
  }
  document.body.style.fontSize = `${tamanhoFonte}%`;
}

function alternarContraste() {
  const body = document.body;
  body.classList.toggle('high-contrast');
  const contrasteAtivo = body.classList.contains('high-contrast');
  localStorage.setItem('contrasteAtivo', contrasteAtivo);
}

window.onload = () => {
  if (localStorage.getItem('contrasteAtivo') === 'true') {
    document.body.classList.add('high-contrast');
  }
};
