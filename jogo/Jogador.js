class Jogador{
    constructor (){
      this.imagem = loadImage ("jogo/imgJogo/IMG-ASTRONAUT.png");
      this.posX = 250;
      this.posY = 310;
      this.velocidade = 5;
      this.largura = 90;
      this.altura = 105;
      this.yInicial = this.posY;
      this.yFinal = this.posY+ this.altura;
      this.xInicial = this.posX;
      this.xFinal= this.posX+ this.largura;
    }
    mova(){
      image(this.imagem,this.posX,this.posY,this.largura,this.altura);
      
      
      if((keyIsDown(39)) && (this.xFinal<600)){
        this.posX += this.velocidade;
      }
      if((keyIsDown(37)) && (this.xInicial>0)){
        this.posX -= this.velocidade;
      }
      // para impedir que o personagem não passe dos limites do campo
      this.yInicial = this.posY;
      this.yFinal = this.posY+ this.altura;
      this.xInicial = this.posX;
      this.xFinal= this.posX+ this.largura;
    }
  }
  