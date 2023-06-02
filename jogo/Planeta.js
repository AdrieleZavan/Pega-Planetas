class Planeta{
    constructor(){
     this.imagem = imgPlanetas[int(random(0,3.9))];
     this.posX = random(10,500);
     this.posY = 0 ;
     this.velocidade = random(1+tentativas,5+tentativas)
     this.largura = 50;
     this. altura = 50;
     this.yInicial = this.posY;
     this.yFinal = this.posY+ this.altura;
     this.xInicial = this.posX;
     this.xFinal= this.posX+ this.largura;
   }
   mova(){
     this.posY += this.velocidade;
     this.yInicial = this.posY;
     this.yFinal = this.posY+ this.altura;
     this.xInicial = this.posX;
     this.xFinal= this.posX+ this.largura;
     image(this.imagem,this.posX,this.posY,this.largura,this.altura);
   }
 }