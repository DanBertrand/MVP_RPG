class Turn {

	lifeStatus = () => {
		console.log("LIFEPOINTS :")
		characters.forEach((character) => {
			if (character.hp < 0) {
				console.log(`${character.name} : FUCKING DEAD`)
			}
			else {
				console.log(`${character.name} : ${character.hp}`)
			}
		})
	}


	fight = () => {
		characters.forEach((character) => {
		  if (character.hp > 0) {
		  	console.log(`>>>>>>> It's time for ${character.name} to play`)
		  	var answerVictim = prompt(`Please choose who the character ${character.name} should attack (name of the victime)`)
		  	let victim = characters.find(element => element.name == answerVictim);
		  	character.dealDamage(victim)
		  	if (victim.isDead() == true){
		  		alert(`${victim.name} has been killed !!`)
		  		victim.status = "killed"
		  		if (game.checkWinner() == 1 ) {
		  			alert(`Congratulation to ${character.name} !! You won the Game !!!`)
		  		};
		  	}
		  	else {
		  		alert(`${character.name} attacks ${victim.name} with ${character.dmg} of damage \n ${victim.name} has now ${victim.hp} lifepoints `)
		 	}
		  	console.log(`${character.name} attacked ${answerVictim} with ${character.dmg} of damage \n ${answerVictim} has now ${victim.hp} lifepoints `)
		  	turn.lifeStatus()
		  }
		}
	)};



	round = () => {
		console.log(`########        ROUND ${11 - game.turnLeft}/10           ########`)
		turn.fight()
	};




	start = () => {
		turn.round()
	};
};
