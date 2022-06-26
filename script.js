let h1 = document.getElementById('page-title');
let button = document.getElementById('mode-selector');
let footer = document.getElementsByTagName('footer')[0];
let body = document.getElementsByTagName('body')[0];

function changeMode () {
    changeClasses();
    changeText();
}

function changeText() {
    if (h1.classList == 'dark-mode') {
        h1.innerHTML = 'Dark Mode On'
    } else {
        h1.innerHTML = 'Light Mode On'
    }
    
    if (button.classList == 'dark-mode') {
        button.innerHTML = 'Light Mode'
    } else {
        button.innerHTML = 'Dark Mode'
    }
}

function changeClasses () {
    button.classList.toggle('dark-mode')
    h1.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
}

button.addEventListener('click', changeMode)