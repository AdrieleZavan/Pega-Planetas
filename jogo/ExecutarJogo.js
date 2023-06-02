function executarJogo(){
    background(imgSpace);
    jogador.mova();
  
    for(let i= 0;i <planetas.length;i++){
      planetas[i].mova();
      
      if(planetas[i].posY > 400){
      planetas[i] = new Planeta(planetas[i].posY);
    }
    // Colocar o som quando o objeto for pego
    if (
      jogador.xInicial<planetas[i].xFinal &&
      jogador.xFinal>planetas[i].xInicial &&
      jogador.yInicial<planetas[i].yFinal &&
      jogador.yFinal>planetas[i].yInicial
      )
      
      if(planetas[i].imagem == imgPlanetas[3]){
      tentativas = 0;
      vidas--;
      planetas[i] = new Planeta();
      
      if(planetas[i].imagem == imgPlanetas[3]){
        tentativas = 0;
        //som de explosão
        planetas[i] = new Planeta();
        
        somMeteoro.play();
        
      
      }
      else{
        tentativas +=1
        planetas[i] = new Planeta();
        //som de moedinha
        somMeteoro.play();
      }
    }
      else{
        tentativas +=1
        planetas[i] = new Planeta();
        somPlanetas.play()
      }
    }
  {
    // Fazer o texto "Pontuação" aparecer
    textSize(15);
    textStyle(BOLD);
    fill ("white");
    text("PONTUAÇÃO TOTAL: " + tentativas, 220,20);
    
  
    textSize(15);
    text("VIDAS: " + vidas, 10, 70);
  
    }
}