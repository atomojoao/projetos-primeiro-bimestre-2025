function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#541A64");
  } else {
    background("rgb(16,31,80)");
  }
}



function desenhaJogadores() {
  textSize(40);
  text("🐫", xJogador1, 100);
  text("🦛", xJogador2, 300);
  text("🐆", xJogador3, +149, 100);
  text("🐅", xJogador4, +200, 300);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 400);
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    text("Jogador 1 venceu!", 10, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 2 venceu!", 10, 200);
    noLoop();
  }
     if (xJogador2 > 350) {
    text("Jogador 3 venceu!", 10, 200);
    noLoop();
     }
   if (xJogador2 > 350) {
    text("Jogador 4 venceu!", 10, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "l") {
    xJogador2 += random(20);
  }
  if (key == "s") {
    xJogador3 += random(20);
  }
  if (key == "k") {
    xJogador4 += random(20);
  }
}
