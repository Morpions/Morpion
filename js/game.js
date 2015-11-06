function Game(){
	this.cases = [];
	this.currentPlayer = 'O';
}

Game.prototype.initGame = function(){
	for (var i=0;i<9;i++){
		this.cases[i]= new Case();
	}
};

Game.prototype.getCases = function(){
	return this.cases;
};

Game.prototype.updateCase = function(idCase){
	this.cases[idCase].status = this.currentPlayer;
	if(this.currentPlayer === 'O'){
		this.currentPlayer = 'X';
	}else{
		this.currentPlayer = 'O';
	}
	return this.cases;
};

function Case (){
	this.status= null;
}

Game.prototype.checkResult = function(){

};