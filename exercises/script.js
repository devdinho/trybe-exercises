const statesContainer = document.querySelector('#states-container');
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
