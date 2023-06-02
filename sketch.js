// variáveis servem para armazenar os dados
var imgSpace;
var jogador;
var imgPlanetas = [];
var planetas = [];
var meteoro;
var somMeteoro;
var somPlanetas;
var tentativas = 0;
var imgAbertura;
var controleTela = "INICIO";
var imgGameover;
var controleGameover = "FINAL";
var vidas = 3;

//carregar as imagens e o audio
function preload(){
  imgSpace= loadImage ("jogo/imgJogo/IMG-FUNDO.png");
  imgPlanetas [0] = loadImage ("jogo/imgJogo/IMG-PLANET01.png");
  imgPlanetas [1] = loadImage ("jogo/imgJogo/IMG-PLANET02.png");
  imgPlanetas [2] = loadImage ("jogo/imgJogo/IMG-PLANET03.png");
  imgPlanetas [3] = loadImage ("jogo/imgJogo/IMG-METEORO.png");
  somMeteoro= loadSound ("AUDIO/Comet-SoundBible.com-1256431940.wav");
 somPlanetas = loadSound ("AUDIO/01-power-up-mario.mp3");
  
  planetas[0] = new Planeta(35);
  planetas[1] = new Planeta (90);
  planetas[2] = new Planeta (145);
  jogador = new Jogador();
  imgAbertura = loadImage ("jogo/imgJogo/abertura.png")
  imgGameover = loadImage ("jogo/imgJogo/gameover.png")
 
}
function keyPressed(){
  if(keyCode==32){
    controleTela = "JOGO"
  }
}
function setup() {
  createCanvas(600, 400).parent("jogo");
}
// fazer com que as imagens apareçam
function draw(){
if (controleTela == "INICIO"){
  mostraAbertura();
}
 if (controleTela == "FINAL"){
  executarJogo();
} 

if(vidas == 0){
  mostraGameover();
}

}