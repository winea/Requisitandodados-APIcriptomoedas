const apikey = {
  key: 
}

//GET, fetch(faz metodos get, post, put, delete) requisiçoes de API

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
.then((response) => {
  if(!response.ok) throw new Error('Erro ao executar a requisição, status' + response.status);
  return response.json();
})
.then((api) => {
  // console.log(api);
  let texto = '';

  //Pegar 10 moedas com simbolo
  for(let i = 0; i<10; i++) {
    console.log(api);

  //Mostrar info api
  texto = texto + `

  <div class="media mt-3">
  <img src="./coin.png" alt="coin" class="align-self-center mr-3" width="100" height="60">
    <div class="media-body">
      <h5>${api.data[i].name}</h5>
      <p>${api.data[i].symbol}</p>
      <p>${api.data[i].first_historical_data}</p>
    </div>
  </div>  
  `;
    document.getElementById("coins").innerHTML = texto;
  }
})
.catch((error) => {
  console.log(error.message);
});
