// Primeiro personagem
const personagemUmImg = document.querySelector('#img-1');
const personagemUmNome = document.querySelector('#personagem-um-nome');
const personagemUmEspecie = document.querySelector('#personagem-um-especie');
const personagemUmStatus = document.querySelector('#personagem-um-status');

// Segundo personagem
const personagemDoisImg = document.querySelector('#img-2');
const personagemDoisNome = document.querySelector('#personagem-dois-nome');
const personagemDoisEspecie = document.querySelector('#personagem-dois-especie');
const personagemDoisStatus = document.querySelector('#personagem-dois-status');

// Terceiro personagem
const personagemTresImg = document.querySelector('#img-3');
const personagemTresNome = document.querySelector('#personagem-tres-nome');
const personagemTresEspecie = document.querySelector('#personagem-tres-especie');
const personagemTresStatus = document.querySelector('#personagem-tres-status');

const botao = document.querySelector('#botao');

function numeroAleatorio() {
    return Math.floor(Math.random() * 826);
}

function construirDados(personagens) {
    const personagemUm = personagens[0];
    const personagemDois = personagens[1];
    const personagemTres = personagens[2];

    //Monta primeiro personagem
    personagemUmImg.src = personagemUm.image;
    personagemUmImg.alt = personagemUm.name;
    personagemUmNome.innerHTML = personagemUm.name;
    personagemUmEspecie.innerHTML = personagemUm.species;
    personagemUmStatus.innerHTML = personagemUm.status;

    //Monta segundo personagem
    personagemDoisImg.src = personagemDois.image;
    personagemDoisImg.alt = personagemDois.name;
    personagemDoisNome.innerHTML = personagemDois.name;
    personagemDoisEspecie.innerHTML = personagemDois.species;
    personagemDoisStatus.innerHTML = personagemDois.status;

    //Monta terceiro personagem
    personagemTresImg.src = personagemTres.image;
    personagemTresImg.alt = personagemTres.name;
    personagemTresNome.innerHTML = personagemTres.name;
    personagemTresEspecie.innerHTML = personagemTres.species;
    personagemTresStatus.innerHTML = personagemTres.status;
}

function buscaPersonagem() {
    const personagemUmId = numeroAleatorio();
    const personagemDoisId = numeroAleatorio();
    const personagemTresId = numeroAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${personagemUmId},${personagemDoisId},${personagemTresId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        construirDados(data);
    });
}

botao.addEventListener('click', () => {
    buscaPersonagem();
});