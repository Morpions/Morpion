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
	this.checkResult();
	if(this.currentPlayer === 'O'){
		this.currentPlayer = 'X';
	}else{
		this.currentPlayer = 'O';
	}
	return this.getCases();
};

function Case (){
	this.status= null;
}

Game.prototype.checkResult = function(){
	if((this.case[0].status=this.currentPlayer && this.case[1].status=this.currentPlayer && this.case[2].status=this.currentPlayer)
		|| (this.case[3].status=this.currentPlayer && this.case[4].status=this.currentPlayer && this.case[5].status=this.currentPlayer)
		|| (this.case[6].status=this.currentPlayer && this.case[7].status=this.currentPlayer && this.case[8].status=this.currentPlayer)
		|| (this.case[1].status=this.currentPlayer && this.case[4].status=this.currentPlayer && this.case[7].status=this.currentPlayer)
		|| (this.case[2].status=this.currentPlayer && this.case[5].status=this.currentPlayer && this.case[8].status=this.currentPlayer)
		|| (this.case[0].status=this.currentPlayer && this.case[3].status=this.currentPlayer && this.case[6].status=this.currentPlayer)
		|| (this.case[0].status=this.currentPlayer && this.case[4].status=this.currentPlayer && this.case[8].status=this.currentPlayer)
		|| (this.case[6].status=this.currentPlayer && this.case[4].status=this.currentPlayer && this.case[2].status=this.currentPlayer)){

		alert(this.currentPlayer + " Remporte la partie");
		return true;
	}
};