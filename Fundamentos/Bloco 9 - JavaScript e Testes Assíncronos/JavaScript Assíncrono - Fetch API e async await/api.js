const API_URL = 'https://api.coincap.io/v2/assets/';

const coinList = document.getElementById('coin-list');

const getCoinArray = async () => {
  let top10Coins = await fetch(API_URL)
  .then(response => response.json())
  .then(response => response.data.slice(0, 10));
  console.log(top10Coins);
  top10Coins.forEach((coin, index) => {
    coinList.innerHTML += `<li>${index + 1}. ${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)} USD <span class="${Number(coin.changePercent24Hr) < 0 ? 'bear' : 'bull'}">(${Number(coin.changePercent24Hr).toFixed(2)}%)</span></li>`;
  });
}

getCoinArray();
