

class GameAltr{

	constructor(){

		

		this.playHouse = Math.floor(Math.random() * 6)

		
		this.imgObj1 = document.getElementById('img-obj1')
		this.imgObj2 = document.getElementById('img-obj2')

		this.itemObj1 = document.getElementById('game-result-1')
		this.itemObj2 = document.getElementById('game-result-2')
		
		this.labelResult = document.querySelector('.label-result')

		this.valueScore = document.getElementById('value-score').value ;
		
		this.scoreWin = 1;

		this.valueScore = parseInt(this.valueScore)

		this.valueScore = this.scoreWin + this.valueScore
		
		

	}	

	sci(){

		

		console.log(this.playHouse)

		this.imgObj1.src = 'images/icon-scissors.svg'

		
		
		if (this.playHouse == 1){
		 	console.log('empate')
		 	
		 	this.labelResult.innerHTML = "TIED"
			this.imgObj2.src = 'images/icon-scissors.svg'

		}else if(this.playHouse == 2 || this.playHouse == 4){

		 	console.log('voce ganhou')

		 	
		 	let score = document.getElementById('value-score')

			score.value = this.valueScore


		 	this.labelResult.innerHTML = "YOU WIN"

		 	if(this.playHouse == 2){
		 		this.imgObj2.src = 'images/icon-paper.svg'


		 	}if(this.playHouse == 4){
		 		this.imgObj2.src = 'images/icon-lizard.svg'

		 	}
		 	


		}else if(this.playHouse == 3 || this.playHouse == 5){

		 	console.log('voce perdeu')

		 	this.labelResult.innerHTML = "YOU LOSE"

		 	if (this.playHouse == 3) {

				this.imgObj2.src = 'images/icon-rock.svg'

		 	}if (this.playHouse == 5) {

				this.imgObj2.src = 'images/icon-spock.svg'

		 	}
		 	

		}

		return this.imgObj1

		
		
	}

	paper(){

		this.imgObj1.src = 'images/icon-paper.svg'
		
		if (this.playHouse == 1 || this.playHouse == 4){

		 	console.log('voce perdeu')

		 	this.labelResult.innerHTML = "YOU LOSE"

		 	if (this.playHouse == 1) {

				this.imgObj2.src = 'images/icon-scissors.svg'

		 	}if (this.playHouse == 4) {

				this.imgObj2.src = 'images/icon-lizard.svg'


		 	}


		 }else if(this.playHouse == 2){

		 	console.log('empate')

		 	this.labelResult.innerHTML = "TIED"

			this.imgObj2.src = 'images/icon-paper.svg'
			


		 }else if(this.playHouse == 3 || this.playHouse == 5 ){

		 	console.log('voce ganhou')

		 	let score = document.getElementById('value-score')

			score.value = this.valueScore

		 	this.labelResult.innerHTML = "YOU WIN"

		 	if (this.playHouse == 3) {

				this.imgObj2.src = 'images/icon-rock.svg'

		 	}if (this.playHouse == 5) {

				this.imgObj2.src = 'images/icon-spock.svg'

		 	}


		 }

		return this.imgObj1
		
	}

	rock(){

		this.imgObj1.src = 'images/icon-rock.svg'
		
		if (this.playHouse == 1 || this.playHouse == 4){
		 	console.log('voce ganhou')

		 	let score = document.getElementById('value-score')

			score.value = this.valueScore

		 	this.labelResult.innerHTML = "YOU WIN"

		 	if (this.playHouse == 1) {
				this.imgObj2.src = 'images/icon-scissors.svg'

		 	}

		 	if (this.playHouse == 4) {
				this.imgObj2.src = 'images/icon-lizard.svg'

		 	}

		}else if(this.playHouse == 2){
		 	console.log('voce perdeu')

		 	this.labelResult.innerHTML = "YOU LOSE"

		 	if (this.playHouse == 2) {

				this.imgObj2.src = 'images/icon-paper.svg'

		 	}if (this.playHouse == 5) {
		 		
				this.imgObj2.src = 'images/icon-spock.svg'

		 	}

		}else if(this.playHouse == 3){
		 	console.log('empate')

		 	this.labelResult.innerHTML = "TIED"
			this.imgObj2.src = 'images/icon-rock.svg'
 
		}

		return this.imgObj1
		
	}

	lizard(){

		this.imgObj1.src = 'images/icon-lizard.svg'
		
		if (this.playHouse == 2 || this.playHouse == 5){
		 	console.log('voce ganhou')

		 	let score = document.getElementById('value-score')

			score.value = this.valueScore

		 	this.labelResult.innerHTML = "YOU WIN"

		 	if (this.playHouse == 2) {
				this.imgObj2.src = 'images/icon-paper.svg'

		 	}

		 	if (this.playHouse == 5) {
				this.imgObj2.src = 'images/icon-spock.svg'

		 	}

		}else if(this.playHouse == 1 || this.playHouse == 3){
		 	console.log('voce perdeu')

		 	this.labelResult.innerHTML = "YOU LOSE"

		 	if (this.playHouse == 1) {

				this.imgObj2.src = 'images/icon-scissors.svg'

		 	}if (this.playHouse == 3) {
		 		
				this.imgObj2.src = 'images/icon-rock.svg'

		 	}

		}else if(this.playHouse == 4){
		 	console.log('empate')

		 	this.labelResult.innerHTML = "TIED"
			this.imgObj2.src = 'images/icon-lizard.svg'
 
		}

		return this.imgObj1
		
	}

	spock(){

		this.imgObj1.src = 'images/icon-spock.svg'
		
		if (this.playHouse == 1 || this.playHouse == 3){
		 	console.log('voce ganhou')

		 	let score = document.getElementById('value-score')

			score.value = this.valueScore

		 	this.labelResult.innerHTML = "YOU WIN"

		 	if (this.playHouse == 1) {
				this.imgObj2.src = 'images/icon-scissors.svg'

		 	}

		 	if (this.playHouse == 3) {
				this.imgObj2.src = 'images/icon-rock.svg'

		 	}

		}else if(this.playHouse == 2 || this.playHouse == 4){
		 	console.log('voce perdeu')

		 	this.labelResult.innerHTML = "YOU LOSE"

		 	if (this.playHouse == 2) {

				this.imgObj2.src = 'images/icon-paper.svg'

		 	}if (this.playHouse == 4) {
		 		
				this.imgObj2.src = 'images/icon-lizard.svg'

		 	}

		}else if(this.playHouse == 5){
		 	console.log('empate')

		 	this.labelResult.innerHTML = "TIED"
			this.imgObj2.src = 'images/icon-spock.svg'
 
		}

		return this.imgObj1
		
	}
	
}	




var gameAltr = new GameAltr()

document.querySelector('.container-game-result').style.display = "none";


function sciPlay(){

	document.querySelector(".area-game").style.display = "none";
	document.querySelector('.container-game-result').style.display = "block";



	gameAltr.sci();

}



function paperPlay(){

	document.querySelector(".area-game").style.display = "none";
	document.querySelector('.container-game-result').style.display = "block";



	gameAltr.paper();

}


function rockPlay(){

	document.querySelector(".area-game").style.display = "none";
	document.querySelector('.container-game-result').style.display = "block";



	gameAltr.rock();

}

function lizardPlay(){

	document.querySelector(".area-game").style.display = "none";
	document.querySelector('.container-game-result').style.display = "block";



	gameAltr.lizard();

}

function spockPlay(){

	document.querySelector(".area-game").style.display = "none";
	document.querySelector('.container-game-result').style.display = "block";



	gameAltr.spock();

}



function rules(){

	let ctRules = document.querySelector(".rules")

	ctRules.classList.add('on')

	document.querySelector('.container-game').style.opacity = 0.3;

}

function rulesOff(){

	let ctRules = document.querySelector(".rules")

	ctRules.classList.remove('on')
	document.querySelector('.container-game').style.opacity = 1;



}

function playAgain(){

	location.reload()

}