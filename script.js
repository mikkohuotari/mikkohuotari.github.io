var adjectives = ["cool", "🔥", "chill", "ace", "wavy"];
var random = Math.round(Math.random() * 4);
var randomAdjective = adjectives[random];

window.onload = function(){
  document.getElementById('adjective').innerHTML = this.randomAdjective;
}