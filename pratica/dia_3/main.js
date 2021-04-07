const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
  Copie esse arquivo e edite apenas ele;

  1. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
  1.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

  2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
  com a classe 'tech';

  3. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
  redirecione para alguma página;
  3.1. Que tal redirecionar para seu portifólio?

  4. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
  a cor do mesmo;

  Segue abaixo um exemplo do uso de event.target:
*/

const divs = [divUm, divDois, divTres];

divs.forEach((div) => {
	div.addEventListener('click', addClass);
});

input.addEventListener('input', addText);

function addText() {
	let techDiv = divs.find((div) => {
		return div.classList.contains('tech');
	});
	techDiv.innerText = input.value;
}

function addClass(event) {
	divs.forEach((div) => {
		div.classList.remove('tech');
	});
	event.target.classList.add('tech');
}

function resetText(event) {
	// O Event é passado como um parâmetro para a função.
	event.target.innerText = 'Opção reiniciada';
	// O event possui várias propriedades, porém a mais usada é o event.target,
	// que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
