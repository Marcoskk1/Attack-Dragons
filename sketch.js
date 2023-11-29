let castelo, canhao, chefao, fundo, final, fogo, perdeu, venceu, iniciar;

let dragao = [];
let bruxa = [];
let morcego = [];
let pedra;
let imgcastelo
let imgdragao

let imgbruxa
let imgchefao
let imgperdeu
let imgvenceu
let imgfogo
let imgmorcego
let imginiciar
let imgpedra

function preload(){
  imgdragao = loadImage("imagens/dragao.gif");
  imgcastelo = loadImage("imagens/castelo.png");
  imgcanhao = loadImage("imagens/canhao.png");
  imgbruxa=loadImage("imagens/bruxa.gif");
  imgchefao = loadImage("imagens/chefao.png");
  fundo = loadImage("imagens/fundo.png");
  final = loadImage("imagens/final.png");
  imgperdeu = loadImage("imagens/perdeu.png");
  imgvenceu = loadImage("imagens/venceu.png");
  imgfogo = loadImage("imagens/fogo.png");
  imgmorcego = loadImage("imagens/morcego.png");
  imginiciar = loadImage("imagens/iniciar.png");
  imgpedra = loadImage("imagens/pedra.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  castelo = new Castelo();
  canhao = new Canhao();
  angulo = -PI/8;
}

function draw() {
  background(fundo);
  canhao.mostrar();
  canhao.rotation(angulo);
  castelo.mostrar();
}

