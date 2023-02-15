
var playHouse = Math.floor(Math.random() * 6)

if (playHouse == 0) {

	playHouse = 1;
}


var imgObj1 = document.getElementById('img-obj1')

var imgObj2 = document.getElementById('img-obj2')

var itemObj1 = document.getElementById('game-result-1')
var itemObj2 = document.getElementById('game-result-2')
		
var labelResult = document.querySelector('.label-result')

var valueScore = document.getElementById('value-score').value ;
		
var scoreWin = 1;

var valueScore = parseInt(valueScore)

var valueScore = scoreWin + valueScore


var score = document.getElementById('value-score')

/*///////////////////////////////////////////////////////////////////////////////////*/

document.querySelector('.container-game-result').style.display = "none";


function sciPlay(){

	document.querySelector(".area-game").style.display = "none";
	document.querySelector('.container-game-result').style.display = "block";


	/*/////////////////////////////////////////////////////////*/
		console.log(playHouse)

		imgObj1.src = 'images/icon-scissors.svg'

		
		
		if (playHouse == 1){
		 	console.log('empate')
		 	
		 	labelResult.innerHTML = "TIED"
			imgObj2.src = 'images/icon-scissors.svg'

		}else if(playHouse == 2 || playHouse == 4){

		 	console.log('voce ganhou')
		 	
		 	
		 	

			score.value = valueScore
			

		 	labelResult.innerHTML = "YOU WIN"

		 	if(playHouse == 2){
		 		imgObj2.src = 'images/icon-paper.svg'


		 	}if(playHouse == 4){
		 		imgObj2.src = 'images/icon-lizard.svg'

		 	}
		 	


		}else if(playHouse == 3 || playHouse == 5){

		 	console.log('voce perdeu')

		 	labelResult.innerHTML = "YOU LOSE"

		 	if (playHouse == 3) {

				imgObj2.src = 'images/icon-rock.svg'

		 	}if (playHouse == 5) {

				imgObj2.src = 'images/icon-spock.svg'

		 	}
		 	

		}

		return imgObj1
		

}



function paperPlay(){

	document.querySelector(".area-game").style.display = "none";
	document.querySelector('.container-game-result').style.display = "block";

	/*/////////////////////////////////////////////////////////*/

		imgObj1.src = 'images/icon-paper.svg'
		
		if (playHouse == 1 || playHouse == 4){

		 	console.log('voce perdeu')

		 	labelResult.innerHTML = "YOU LOSE"

		 	if (playHouse == 1) {

				imgObj2.src = 'images/icon-scissors.svg'

		 	}if (playHouse == 4) {

				imgObj2.src = 'images/icon-lizard.svg'


		 	}


		 }else if(playHouse == 2){

		 	console.log('empate')

		 	labelResult.innerHTML = "TIED"

			imgObj2.src = 'images/icon-paper.svg'
			


		 }else if(playHouse == 3 || playHouse == 5 ){

		 	console.log('voce ganhou')

		 	

			score.value = valueScore

		 	labelResult.innerHTML = "YOU WIN"

		 	if (playHouse == 3) {

				imgObj2.src = 'images/icon-rock.svg'

		 	}if (playHouse == 5) {

				imgObj2.src = 'images/icon-spock.svg'

		 	}


		 }

		return imgObj1


}


function rockPlay(){

	document.querySelector(".area-game").style.display = "none";
	document.querySelector('.container-game-result').style.display = "block";

	/*/////////////////////////////////////////////////////////*/

	imgObj1.src = 'images/icon-rock.svg'
		
		if (playHouse == 1 || playHouse == 4){
		 	console.log('voce ganhou')

		 	

			score.value = valueScore

		 	labelResult.innerHTML = "YOU WIN"

		 	if (playHouse == 1) {
				imgObj2.src = 'images/icon-scissors.svg'

		 	}

		 	if (playHouse == 4) {
				imgObj2.src = 'images/icon-lizard.svg'

		 	}

		}else if(playHouse == 2){
		 	console.log('voce perdeu')

		 	labelResult.innerHTML = "YOU LOSE"

		 	if (playHouse == 2) {

				imgObj2.src = 'images/icon-paper.svg'

		 	}if (playHouse == 5) {
		 		
				imgObj2.src = 'images/icon-spock.svg'

		 	}

		}else if(playHouse == 3){
		 	console.log('empate')

		 	labelResult.innerHTML = "TIED"
			imgObj2.src = 'images/icon-rock.svg'
 
		}

		return imgObj1
	

}

function lizardPlay(){

	document.querySelector(".area-game").style.display = "none";
	document.querySelector('.container-game-result').style.display = "block";


	/*/////////////////////////////////////////////////////////*/

	imgObj1.src = 'images/icon-lizard.svg'
		
		if (playHouse == 2 || playHouse == 5){
		 	console.log('voce ganhou')

		 	

			score.value = valueScore

		 	labelResult.innerHTML = "YOU WIN"

		 	if (playHouse == 2) {
				imgObj2.src = 'images/icon-paper.svg'

		 	}

		 	if (playHouse == 5) {
				imgObj2.src = 'images/icon-spock.svg'

		 	}

		}else if(playHouse == 1 || playHouse == 3){
		 	console.log('voce perdeu')

		 	labelResult.innerHTML = "YOU LOSE"

		 	if (playHouse == 1) {

				imgObj2.src = 'images/icon-scissors.svg'

		 	}if (playHouse == 3) {
		 		
				imgObj2.src = 'images/icon-rock.svg'

		 	}

		}else if(playHouse == 4){
		 	console.log('empate')

		 	labelResult.innerHTML = "TIED"
			imgObj2.src = 'images/icon-lizard.svg'
 
		}

		return imgObj1

}

function spockPlay(){

	document.querySelector(".area-game").style.display = "none";
	document.querySelector('.container-game-result').style.display = "block";


	/*/////////////////////////////////////////////////////////*/

	imgObj1.src = 'images/icon-spock.svg'
		
		if (playHouse == 1 || playHouse == 3){
		 	console.log('voce ganhou')

		 	

			score.value = valueScore

		 	labelResult.innerHTML = "YOU WIN"

		 	if (playHouse == 1) {
				imgObj2.src = 'images/icon-scissors.svg'

		 	}

		 	if (playHouse == 3) {
				imgObj2.src = 'images/icon-rock.svg'

		 	}

		}else if(playHouse == 2 || playHouse == 4){
		 	console.log('voce perdeu')

		 	labelResult.innerHTML = "YOU LOSE"

		 	if (playHouse == 2) {

				imgObj2.src = 'images/icon-paper.svg'

		 	}if (playHouse == 4) {
		 		
				imgObj2.src = 'images/icon-lizard.svg'

		 	}

		}else if(playHouse == 5){
		 	console.log('empate')

		 	labelResult.innerHTML = "TIED"
			imgObj2.src = 'images/icon-spock.svg'
 
		}

		return imgObj1

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