const counterButton =  document.getElementById('counter-button');
let clickCount = 0;
counterButton.addEventListener('click', () => {
    counterButton.innerHTML = `Clicks: ${++clickCount}`;
});