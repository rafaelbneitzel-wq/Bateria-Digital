const ximbau = document.getElementById("ximbau");
const caixa = document.getElementById("caixa");
const bumbo = document.getElementById("bumbo");
const surdo = document.getElementById("surdo");
const prato = document.getElementById("prato");

const somBumbo = new Audio('../sons/bumbo.mp3');
const somPrato = new Audio('../sons/prato.mp3');
const somXimbau = new Audio('../sons/ximbau.mp3');
const somSurdo = new Audio('../sons/surdo.mp3');
const somCaixa = new Audio('../sons/caixa.mp3');

let teclaXimbau = "x";
let teclaCaixa = "c";
let teclaBumbo = "b";
let teclaSurdo = "s";
let teclaPrato = "p";

ximbau.addEventListener('click', InstrumentoXimbau);
caixa.addEventListener('click', InstrumentoCaixa);
bumbo.addEventListener('click', InstrumentoBumbo);
surdo.addEventListener('click', InstrumentoSurdo);
prato.addEventListener('click', InstrumentoPrato);

document.addEventListener('keydown', function(evento) {
    if (evento.key === teclaBumbo) {
        InstrumentoBumbo();
    } else if (evento.key === teclaPrato) {
        InstrumentoPrato();
    } else if (evento.key === teclaXimbau) {
        InstrumentoXimbau();
    } else if (evento.key === teclaCaixa) {
        InstrumentoCaixa();
    } else if (evento.key === teclaSurdo) {
        InstrumentoSurdo();
    }
});

function tocarSom(som) {
    const voz = som.cloneNode();
    voz.currentTime = 0;
    voz.play().catch((erro) => {
        console.error("Não foi possível reproduzir o áudio:", erro);
    });
}

function InstrumentoBumbo() {
    tocarSom(somBumbo);
}

function InstrumentoPrato() {
    tocarSom(somPrato);
}

function InstrumentoXimbau() {
    tocarSom(somXimbau);
}

function InstrumentoCaixa() {
    tocarSom(somCaixa);
}

function InstrumentoSurdo() {
    tocarSom(somSurdo);
}