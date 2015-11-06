window.onload = function(){
  (new View()).init();
};

function View(){

}

View.prototype.init = function(){
  var cases = [];
  for(var i = 0; i < 10; i++){
    cases.push({});
  }

  this.displayCases(cases);
};

View.prototype.displayCases = function(cases){
  var morpion = document.querySelector('#morpion');
  morpion.innerHTML = '';

  for(var c = 0, line = 0, total = 0; total < 9; c++, total++){
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
    caseHTML.setAttribute("case-id", total);
    currentLine.appendChild(caseHTML);
  }
};

