class Game {
	constructor(turnLeft = 10){
		this.turnLeft = turnLeft
	}

	newTurn = () => {
		this.turnLeft -= 1
	}

	winnerStatus = () => {
		characters.forEach((character) => {
		  if (character.hp > 0) {
		  	character.status == "Winner"
		  	console.log(character + "is a " + character.status)
		  }
		})
	}

	presentation = (characters) => {
		console.log("---------------------------------------------")
		console.log('%c Welcome to our new RPG Game !!!','color: #1c87c9; font-size: 22px')
		console.log("---------------------------------------------")
		console.log(`%c We have today ${characters.length} strongs warriors who wanna fight : `,'color: #666666; font-size: 14px; margin-bottom:5px;')
		characters.forEach((character) => {
			console.log(`A ${character.constructor.name} in the name of ${character.name} (Damage: ${character.dmg} - LifePoints: ${character.hp}  - Mana: ${character.mana})  `)
		})
	}

	checkWinner = (numberOfPlayer, characters) => {
		let count = numberOfPlayer
		characters.forEach((character) => {
		  if (character.status == "killed") {
		  	count = count - 1
		  }
		})
		if (count == 1) {
			return count
		}
		else {
			false
		}
	}

	winningByClock = (characters) => {
		  let ranking = []
		  ranking = characters.sort((a,b) => (a.hp < b.hp) ? 1 : -1)
		  return ranking[0]
	}
}


function setPlayers(number){
	    const Grace = new Fighter();
	    const Ulder = new Paladin();
	    const Moana = new Monk();
	    const Draven = new Berzerker();
	    const Carl = new Assassin();
	    let characters = [Grace, Ulder, Moana, Draven, Carl]
	    if (number == 2) {
	    	characters = characters.slice(1, 3)
	    	return characters
	    }
	    else if (number == 3) {
	    	characters = characters.slice(1, 4)
	    	return characters
	    }
	    else if (number == 4) {
	    	characters = characters.slice(0, 4)
	    	return characters
	    }
	    else if (number == 5) {
	        return characters
	    }
	    else {
	    	alert("Invalid Choice !!")
	    	startGame()
	    }
}


function startGame(){
	turn = new Turn
	game = new Game
	var numberOfPlayer = prompt(`Please select the number of players ( 2 to 5)`)
	let characters = setPlayers(numberOfPlayer)
	game.presentation(characters)
	if (game.turnLeft > 0 || game.checkWinner(numberOfPlayer, characters) !== 1) {
		if (game.turnLeft > 0 ) {
			console.log(`####################################  END OF THE GAME ${game.winningByClock(characters).name} WON #################################################`)
		}
		else if (game.checkWinner(numberOfPlayer, characters) !== 1) {
			console.log(`####################################  END OF THE GAME ${game.winningByClock(characters).name} WON #################################################`)
		}
	}
	turn.start(characters, numberOfPlayer)
	game.newTurn()
}


