window.onload = function(){
  (new View()).init();
};

function View(){
  this.Game = new Game();
}

View.prototype.init = function(){
  this.Game.initGame();
  this.displayCases(this.Game.getCases());
};

View.prototype.displayCases = function(cases){
  var morpion = document.querySelector('#morpion');
  morpion.innerHTML = '';

  for(var c = 0, line = 0, total = 0, length = cases.length; total < length; c++, total++){
    if(c > 2){
      line++;
      c = 0;
    }

    var currentLine = document.querySelector('.line[data-lineId="' + line + '"]');
    if(!currentLine){
      currentLine = document.createElement('div');
      currentLine.className += "line";
      currentLine.setAttribute('data-lineId', line);
      morpion.appendChild(currentLine);
    }

    var caseHTML = document.createElement('div');
    caseHTML.className += "case";
    caseHTML.setAttribute("data-case-id", total);
    caseHTML.setAttribute("data-case-type", cases[total].status);
    caseHTML.addEventListener("click", this.clickCase.bind(this));
    currentLine.appendChild(caseHTML);
  }
};

View.prototype.clickCase = function(e){
  this.displayCases(this.Game.updateCase(e.target.getAttribute('data-case-id')));
};
