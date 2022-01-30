//variáveis
var pessoa, pessoaImg;
var edges;
var chao, chaoImg;
var chaoinvisivel;

function preload() {
  //imagens pré-carregadas
  pessoaImg = loadAnimation("runner-2.png", "runner-1.png");
  chaoImg = loadImage("path.png");
}

function setup() {
  //crie sprite aqui 
  createCanvas(400, 400);

  chaoinvisivel = createSprite(200,390,400,10);
  chaoinvisivel.visible = false;

  //criando o pessoa
  pessoa = createSprite(50, 330, 20, 50);
  pessoa.addAnimation("correndo", pessoaImg);
  pessoa.scale = 0.1;

  chao = createSprite(200,200,390,390);
  chao.addImage("solo", chaoImg);

  //definindo limites
  edges = createEdgeSprites();
}
function draw() {
  background('black');

  drawSprites();
}


