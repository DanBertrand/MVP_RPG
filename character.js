class Character {
	constructor(name, hp, dmg, mana, status = "playing"){
		this.name = name;
		this.hp = hp;
		this.dmg = dmg;
		this.mana = mana;
		this.status = status;
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
    constructor(name = "Grace", hp = 12, dmg = 4, mana = 40, status) {
        super(name, hp, dmg, mana, status);
    }

    darkVision = (character, victim) => {
        this.dmg = 5;
        this.mana -= 40;
        let name = character.name
        character.dealDamage(victim);
        this.dmg = 4;
    }
}


class Paladin extends Character {
    constructor(name = "Ulder", hp = 16, dmg = 3, mana = 160, status) {
        super(name, hp, dmg, mana, status);
    }

    healingLighting = (character, victim) => {
        this.mana -= 40;
        this.hp += 5;
        this.dmg = 4;
        character.dealDamage(victim);
        this.dmg = 3
    }
}

class Monk extends Character {
    constructor(name = "Moana", hp = 8, dmg = 2, mana = 200, status) {
        super(name, hp, dmg, mana, status);
    }

    heal = () => {
        this.mana -= 25;
        this.hp += 8;
    }
}

class Berzerker extends Character {
    constructor(name = "Draven", hp = 8, dmg = 4, mana = 0, status) {
        super(name, hp, dmg, mana, status);
    }

    rage = (character, victim) => {
        this.dmg += 1;
        this.hp -= 1;
        character.dealDamage(victim);
    }
}

class Assassin extends Character {
    constructor(name = "Carl", hp = 6, dmg = 6, mana = 20, status) {
        super(name, hp, dmg, mana, status);
    }

    shadowHit = (character, victim) => {
        this.mana -= 20;
        this.dmg = 7;
        character.dealDamage(victim);
        this.dmg = 6;
        if (victim.isDead == false) {
            this.hp -= 7;
        }
    }
}

