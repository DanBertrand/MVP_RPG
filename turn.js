class Turn {

	lifeStatus = (characters) => {
		console.log("LIFEPOINTS :")
		characters.forEach((character) => {
			if (character.hp < 1) {
				console.log(`${character.name} : FUCKING DEAD`)
			}
			else {
				console.log(`${character.name} : ${character.hp}`)
			}
		})
	}


	isValidVictim = (string, characters) => {
		if (string == "exit") {
			document.location.reload();
		}
		else {
			if (characters.find(element => element.name == string) === undefined )  {
						alert("Invalid name !!")
						return false	
					}
					else {
						let victim = characters.find(element => element.name == string);
						if (victim.status == "playing") {
							return victim
						}
						else if (victim.status == "killed") {
							alert("Good try !!! But you cannot attack a dead player !")
							return false
						}
						else {
							alert("Invalid name !!")
							return false
						}
					}
		}
	}

	specialMove = (string) => {
		let move = ""
		if (string == "Fighter") {
			"Dark Vision (DMG: 5, MANA: -40, Do not receive damage for 1 turn)"
		}
		else if (string == "Paladin") {
			move = "Healing Lighting (HP: +5, DMG: 4, MANA: -40)"
		}
		else if (string == "Monk") {
			move = "Heal (HP: +8, DMG: 4, MANA: -25)"
		}
		else if (string == "Berzerker") {
			move = "Rage (HP: -1, DMG: +1 for the whole game)"
		}
		else if (string == "Assassin") {
			move = "Shadow Hit (DMG: 7, MANA: -20) You better to kill the victim otherwise you will lose 7HP afterward"
		}
		return move
	}

	style = (string) => {
		let style = ""
		if (string == "Fighter") {
			style = 'color: #0066ff; font-size: 12px'
		}
		else if (string == "Paladin") {
			style = 'color: #ff9900; font-size: 12px'
		}
		else if (string == "Monk") {
			style = 'color: #00ff00; font-size: 12px'
		}
		else if (string == "Berzerker") {
			style = 'color: #ff33cc; font-size: 12px'
		}
		else if (string == "Assassin") {
			style = 'color: #663300; font-size: 12px'
		}
		return style
	}


	shuffleArray = (a) => {
	    for (let i = a.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [a[i], a[j]] = [a[j], a[i]];
	    }
	    return a;
	}

	specialAttack = (character, victim) => {
		if (character.constructor.name == "Fighter") {
			character.darkVision(character, victim)
		}
		else if (character.constructor.name == "Paladin") {
			character.healingLighting(character, victim)
		}
		else if (character.constructor.name == "Monk") {
			character.heal()
		}
		else if (character.constructor.name == "Berzerker") {
			character.rage(character, victim)
		}
		else if (character.constructor.name == "Assassin") {
			character.shadowHit(character, victim)
		}
	}


	moveChoice = (move, character, victim, answerVictim, characters, numberOfPlayer) => {
		if (move == "exit")  {
			location.reload()
		}
		var i;
		if (move == "1") {
			character.dealDamage(victim)
			 	if (victim.isDead() == true){
			 		alert(`${victim.name} has been killed !!`)
			 		victim.status = "killed"
			 		alert(`${character.name} wins 20 MANA !!`)
			 		character.mana += 20
			 		if (game.checkWinner(numberOfPlayer) == 1 ) {
			 			alert(`Congratulation to ${character.name} !! You won the Game !!!`)
			 		};
			 	}
			 	else {
			 		alert(`${character.name} attacks ${victim.name} with ${character.dmg} of damage \n ${victim.name} has now ${victim.hp} lifepoints `)
				}
			 	console.log(`${character.name} attacked ${answerVictim} with ${character.dmg} of damage \n ${answerVictim} has now ${victim.hp} lifepoints `)
		}
		else if (move == "2") {
			turn.specialAttack(character, victim)
			 	if (victim.isDead() == true){
			 		alert(`${victim.name} has been killed !!`)
			 		victim.status = "killed"
			 		alert(`${character.name} wins 20 MANA !!`)
			 		character.mana += 20
			 		if (game.checkWinner(numberOfPlayer) == 1 ) {
			 			alert(`Congratulation to ${character.name} !! You won the Game !!!`)
			 		};
			 	}
			 	else {
			 		alert(`${character.name} use his special tricks !!!!`)
				}

		}
		else {
			alert(`Invalid entry. Please press "1" or "2"`)
			return false
		}
	}


	fight = (characters, numberOfPlayer) => {
		let array = turn.shuffleArray(characters)
		array.forEach((character) => {
		  if (character.hp > 0) {
		  	console.log(`%c >>>>>>> It's time for ${character.name} to play`, `${turn.style(character.constructor.name)}`)
		  	var answerVictim = prompt(`${character.name} should attack (name of the victim)`)
		  	if (answerVictim === "exit") {
		  		location.reload()
		  	}
		  	while (turn.isValidVictim(answerVictim, characters) == false) {
		  		var answerVictim = prompt(`Please choose who the character ${character.name} should attack (name of the victim)`)
		  	}

		  	let victim = turn.isValidVictim(answerVictim, characters)
		  	var move = prompt(`${character.name}, wich move would you like to do ? \n MANA: ${character.mana} \n DMG: ${character.dmg} \n \n Press "1": Normal attack \n Press "2": ${turn.specialMove(character.constructor.name)}`)
		  	if (turn.moveChoice(move, character, victim, answerVictim, characters, numberOfPlayer) == false) {
		  		var answerVictim = prompt(`Please choose who the character ${character.name} should attack (name of the victim)`)
		  	}
		  	turn.lifeStatus(characters)
		  }
		}
	)};

	round = (characters, numberOfPlayer) => {
		console.log(`%c ########        ROUND ${11 - game.turnLeft}/10           ########`, 'color: red; font-size: 14px; margin-top:20px; margin-bottom:5px;')
		turn.fight(characters, numberOfPlayer)
	};

	start = (characters, numberOfPlayer) => {
		turn.round(characters, numberOfPlayer)
	};
};
