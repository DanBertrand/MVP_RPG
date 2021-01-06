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

	presentation = () => {
		console.log("---------------------------------------------")
		console.log("Welcome to our new RPG Game !!! ")
		console.log("---------------------------------------------")
		console.log(`We have today ${characters.length} strongs warriors who wanna fight : `)
		characters.forEach((character) => {
			console.log(`A ${character.constructor.name} in the name of ${character.name} (Damage: ${character.dmg} - LifePoints: ${character.hp}) `)
		})
	}

	checkWinner = () => {
		let count = characters.length
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

	winningByClock = () => {
		  let ranking = []
		  ranking = characters.sort((a,b) => (a.hp < b.hp) ? 1 : -1)
		  return ranking[0]
	}

}


function startGame(){
	game = new Game
	turn = new Turn
	game.presentation()
	while (game.turnLeft > 0 && game.checkWinner() !== 1) {
		turn.start()
		game.newTurn()
	}
	console.log(`####################################  END OF THE GAME ${game.winningByClock().name} WON #################################################`)
}