var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b211135d-bed2-47dd-af4e-4495d3c14e4a","c85ec254-51a5-43df-aad9-d6d596668e08","7778c274-33e8-42d1-980f-76c153b366f4"],"propsByKey":{"b211135d-bed2-47dd-af4e-4495d3c14e4a":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":28,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"PleDj5kork4NDGCd4YbflFxDlkl1kBJs","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":24},"rootRelativePath":"assets/b211135d-bed2-47dd-af4e-4495d3c14e4a.png"},"c85ec254-51a5-43df-aad9-d6d596668e08":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":28,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"Sj54aicuuSDutR7o2FLfK1tBIRKzHUoR","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":24},"rootRelativePath":"assets/c85ec254-51a5-43df-aad9-d6d596668e08.png"},"7778c274-33e8-42d1-980f-76c153b366f4":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png"}}};
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

playSound("assets/default.mp3", true);

var sprite = createSprite(0, 0,"aimation_1");
sprite.setAnimation("animation_1");

sprite.velocityX = 15;
sprite.velocityY = 14;

var sprite1 = createSprite(400, 400,"aimation_1");
sprite1.setAnimation("animation_2");

sprite1.velocityX = -15;
sprite1.velocityY = -14;

var sprite2 = createSprite(77,215,100,10);

var sprite3 = createSprite(324,87,100,10);

var sprite4 = createSprite(365,344,10,100);


function draw() {
  background("space_1");

  createEdgeSprites();
  sprite.bounceOff(edges);
  
  createEdgeSprites();
  sprite1.bounceOff(edges);
  
  if (sprite.isTouching(sprite1)) {
    sprite.visible = false;
  }
  
  if (sprite1.isTouching(sprite)) {
    sprite1.visible = false;
  }
  if (sprite.displace(sprite1)) {
        sprite.visible = true;
  }
  if (sprite.displace(sprite1)) {
        sprite1.visible = true;
  }
  
  sprite.bounceOff(sprite2);
  sprite1.bounceOff(sprite2);
  
  sprite.bounceOff(sprite3);
  sprite1.bounceOff(sprite3);
  
  sprite.bounceOff(sprite4);
  sprite1.bounceOff(sprite4);

  
  drawSprites();
}
//You may see one sprite eats other and again it spawn.the sprite(red) eaten is not ok so he chases the other sprite(blue) so blue eats the red. when again the sprite(blue) eats so the other sprite(red) chases the sprite(blue) who ate him and this time it didn't got caught.


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
