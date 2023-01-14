const container = document.querySelector('.block-before-after');

document.querySelector('.before-after-cursor').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})