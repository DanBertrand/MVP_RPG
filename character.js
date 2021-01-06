class Character {
	constructor(name, hp, dmg, status = "playing"){
		this.hp = hp;
		this.dmg = dmg;
		this.status = status
		this.name = name
	}

	takeDamage = (number) => {
		this.hp -= number
	}

	dealDamage = (victim) => {
		victim.takeDamage(this.dmg)
	}

	isDead = () => {
		if (this.hp > 1) {
			return false
		}
		else {
			return true
		}
	}
};


class Fighter extends Character {
    constructor(name, hp = 12, dmg = 4, status) {
        super(name, hp, dmg, status);
    }
}


class Paladin extends Character {
    constructor(name, hp = 16, dmg = 3, status) {
        super(name, hp, dmg, status);
    }
}




const Grace = new Fighter(name = "Grace");
const Ulder = new Paladin(name = "Ulder");
const Dan = new Paladin(name = "Dan");


let characters = [Grace, Ulder, Dan]

