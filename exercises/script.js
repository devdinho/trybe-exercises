const forms = document.querySelector('form');
const statesContainer = document.querySelector('#states-container');
const submitButton = document.querySelector('button[type="submit"]');
const resetButton = document.querySelector('#reset-button');

submitButton.onclick = (e) => {
  e.preventDefault();
  
  // [...forms.elements].forEach(element => {
  //   console.log(element.name, element.value);
  // })
  
  const formData = new FormData(forms)
  for (var pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
}

resetButton.onclick = (e) => {
  e.preventDefault();
  forms.reset();
}

console.log(submitButton);
const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

(async function() {
  const rawData = await fetch(URL);
  const data = await rawData.json();
  
  const dataToSort = []
  
  data.forEach(element => {
    dataToSort.push(`<option>${element.nome}</option>`)
  })
  
  statesContainer.innerHTML += dataToSort.sort().join('')
})()
