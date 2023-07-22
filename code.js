var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var parede1 = createSprite(200,0,400,1);
var parede4 = createSprite(0,200,1,400);
var parede2 = createSprite(400,200,1,400);
var parede3 = createSprite(200,400,400,1);

var jogador = createSprite(10,10,15,15);
var tesouro = createSprite(390,390,15,15);
var laser1 = createSprite(100,100,200,5);
var laser2 = createSprite(30,50,5,100);
var laser3 = createSprite(300,300,200,5);
var laser4 = createSprite(370,350,5,100);
var bolinha = createSprite(100,250,30,30);
var centro = createSprite(200,200,50,50);
var gamestate = 0;

jogador.shapeColor=("black");
tesouro.shapeColor=("yellow");
laser1.shapeColor=("red");
laser2.shapeColor=("red");
laser3.shapeColor=("red");
laser4.shapeColor=("red");
bolinha.shapeColor=("red");
centro.shapeColor=("red");

function draw(){
  background("white");
  if(gamestate === 1){
  if(keyDown("up")){
    jogador.y = jogador.y - 7;
  }
  if(keyDown("down")){
    jogador.y = jogador.y + 7;
  }
  if(keyDown("left")){
    jogador.x = jogador.x - 7;
  }
  if(keyDown("right")){
    jogador.x = jogador.x + 7;
  }}
  createEdgeSprites();
  jogador.collide(parede1);
  jogador.collide(parede4);
  jogador.collide(parede2);
  jogador.collide(parede3);
  
  if(gamestate === 0){
    text("aperte espaço para começar",240,200);
    jogador.x = 10;
    jogador.y = 10;
    laser1.x = 100;
    laser1.y = 100;
    laser2.x = 30;
    laser2.y = 50;
    laser3.x = 300;
    laser3.y = 300;
    laser4.x = 370;
    laser4.y = 350;
    bolinha.x = 100;
    bolinha.y = 250;
  }
  
  if(keyDown("space") && gamestate === 0){
    laser1.velocity.y = 10;
    laser2.velocity.x = 10;
    laser3.velocity.y = -10;
    laser4.velocity.x = -10;
    bolinha.velocity.x = 25;
    bolinha.velocity.y = 25;
    gamestate = 1;
  }
  if(laser1.isTouching(parede1) || laser1.isTouching(parede3)){
    laser1.velocity.y = laser1.velocity.y * -1;
  }
  
  if(laser2.isTouching(parede2) || laser2.isTouching(parede4)){
    laser2.velocity.x = laser2.velocity.x * -1;
  }
  
  if(laser3.isTouching(parede3) || laser3.isTouching(parede1)){
    laser3.velocity.y = laser3.velocity.y * -1;
  }
  
  if(laser4.isTouching(parede4) || laser4.isTouching(parede2)){
    laser4.velocity.x = laser4.velocity.x * -1;
  }
  
  if(bolinha.isTouching(parede1) || bolinha.isTouching(parede3)){
    bolinha.velocity.y = bolinha.velocity.y * -1;
  }
  
  if(bolinha.isTouching(parede2) || bolinha.isTouching(parede4)){
    bolinha.velocity.x = bolinha.velocity.x * -1;
  }
  
  if(jogador.isTouching(laser1) || jogador.isTouching(laser2) || jogador.isTouching(laser3) || jogador.isTouching(laser4) || jogador.isTouching(bolinha) || jogador.isTouching(centro)){
    gamestate = 0;
  }
  
  if(jogador.isTouching(tesouro)){
    text("GANHEMO SUPREMOOOO",240,200);
    text("aperte R para recomeçar",240,220);
    laser1.velocity.x = 0;
    laser1.velocity.y = 0;
    laser2.velocity.x = 0;
    laser2.velocity.y = 0;
    laser3.velocity.x = 0;
    laser3.velocity.y = 0;
    laser4.velocity.x = 0;
    laser4.velocity.y = 0;
    bolinha.velocity.x = 0;
    bolinha.velocity.y = 0;
    gamestate = 2;
  }
  
  if(gamestate === 2 && keyDown("r")){
    gamestate = 0;
  }
  
  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
