const personagemImg = document.querySelector('#img');
const personagemNome = document.querySelector('#nome');
const personagemEspecie = document.querySelector('#especie');
const personagemStatus = document.querySelector('#status');
const botao = document.querySelector('#botao');

function numeroAleatorio() {
    return Math.floor(Math.random() * 826);
}

function buscaPersonagem() {
    const personagemId = numeroAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${personagemId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        personagemImg.src = data.image;
        console.log(data.image);
        personagemImg.alt = data.name;
        personagemNome.innerHTML = data.name;
        personagemEspecie.innerHTML = data.species;
        personagemStatus.innerHTML = data.status;
    });
}

botao.addEventListener('click', () => {
    buscaPersonagem();
});