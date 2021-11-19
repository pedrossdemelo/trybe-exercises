const API_URL = 'https://api.coincap.io/v2/assets/';

const coinList = document.getElementById('coin-list');

const getCoinArray = async () => {
  let top10Coins = await fetch(API_URL)
  .then(response => response.json())
  .then(response => response.data.slice(0, 10));
  console.log(top10Coins);
  top10Coins.forEach(coin => {
    coinList.innerHTML += `<li>${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)} (${Number(coin.changePercent24Hr).toFixed(2)}%)</li>`;
  });
}

getCoinArray();
