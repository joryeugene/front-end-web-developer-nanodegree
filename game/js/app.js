// Initialize game variables
var lives = 3,
    level = 0;

// Class constructor for Enemy
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.width = 80;
  this.height = 50;
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
  this.height = 75;
  this.width = 50;
  this.sprite = 'images/char-boy.png';
};

// Reset player position when player reaches water
Player.prototype.update = function() {
  if (this.y < 0){
    this.reset();
    level = level + 1;
    document.getElementById("level").innerHTML = level;
  }
};

// Draw player
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
  if (direction === 'left' && this.x > 0) {
    this.x -= 101;
  }
  if (direction === 'right' && this.x < 400) {
    this.x += 101;
  }
  if (direction === 'up' && this.y > 0) {
    this.y -= 85;
  }
  if (direction === 'down' && this.y < 400) {
    this.y += 85;
  }
};

// Instantiates enemy objects in array
var allEnemies = [
  new Enemy(-200, 60, 170),
  new Enemy(-200, 140, 265),
  new Enemy(-200, 230, 225)
];

// Instantiates player
var player = new Player(202, 400);

// Reset player
Player.prototype.reset = function() {
  this.x = 202;
  this.y = 400;
};

function resetStats() {
  lives = 3;
  level = 0;
  document.getElementById("level").innerHTML = level;
  document.getElementById("lives").innerHTML = lives;
}

// Collision
function checkCollisions(allEnemies, player) {
  for (var i = 0; i < allEnemies.length; i++) {
    if (allEnemies[i].x < player.x + player.width &&
      allEnemies[i].x + allEnemies[i].width > player.x &&
      allEnemies[i].y < player.y + player.height &&
      allEnemies[i].height + allEnemies[i].y > player.y){
      player.reset(202, 400);
      lives = lives - 1;
     }
      document.getElementById("lives").innerHTML = lives;
    if (lives < 0) {
      resetStats();
      alert("Game Over!");
    }
  }
}

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
