var adjectives = ["rad", "🔥", "chill", "ok", "🌊", "loopy"];
var random = Math.round(Math.random() * (adjectives.length - 1));
var randomAdjective = adjectives[random];

window.onload = function(){
  document.getElementById('adjective').innerHTML = this.randomAdjective;
}