// 'use strict';

// Class constructor for Enemy
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.WIDTH = 80;
  this.HEIGHT= 50;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
};

// Update enemy posiiton
Enemy.prototype.update = function(dt) {
  if(this.x < 500){
    this.x += dt * this.speed;
  }
  else {
    this.x = -200;
  }
};

// Draw enemy
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class constructor
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.MOVE_X = 101;
  this.MOVE_Y = 85;
  this.HEIGHT = 75;
  this.WIDTH = 50;
  this.sprite = 'images/char-boy.png';
  this.lives = 3;
  this.level = 0;
};

// Reset player position when player reaches water
Player.prototype.update = function() {
  if (this.y < 0){
    this.reset();
    this.level = this.level + 1;
    document.getElementById("level").innerHTML = this.level;
    allEnemies.faster(1.2);
  }
};

// Draw player
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
  if (direction === 'left' && this.x > 0) {
    this.x -= this.MOVE_X;
  }
  if (direction === 'right' && this.x < 400) {
    this.x += this.MOVE_X;
  }
  if (direction === 'up' && this.y > 0) {
    this.y -= this.MOVE_Y;
  }
  if (direction === 'down' && this.y < 400) {
    this.y += this.MOVE_Y;
  }
};

// Instantiates enemy objects in array
var allEnemies = [
  new Enemy(-200, 60, 170),
  new Enemy(-200, 140, 265),
  new Enemy(-200, 230, 225)
];

// Make enemies faster at each level
allEnemies.faster = function (multiplier) {
  for (var i = 0; i < this.length; i++) {
    this[i].speed *= multiplier;
  }
};

// reset speeds when game is over
allEnemies.resetSpeed = function() {
  allEnemies[0].speed = 170;
  allEnemies[1].speed = 265;
  allEnemies[2].speed = 225;
};

// Instantiates player
var player = new Player(202, 400);

// Reset player
Player.prototype.reset = function() {
  this.x = 202;
  this.y = 400;
};

Player.prototype.resetStats = function() {
  this.lives = 3;
  this.level = 0;
  document.getElementById("level").innerHTML = this.level;
  document.getElementById("lives").innerHTML = this.lives;
};

// Controls
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});

function dpad(input) {
  player.handleInput(input);
}
