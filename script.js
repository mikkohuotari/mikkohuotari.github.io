var adjectives = ["cool", "🔥", "chill", "ace", "ok"];
var random = Math.round(Math.random() * 4);
var randomAdjective = adjectives[random];

window.onload = function(){
  document.getElementById('adjective').innerHTML = this.randomAdjective;
}