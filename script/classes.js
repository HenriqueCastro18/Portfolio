// Knight, Sorcerer, Thief, Archer 

// Orc, Golem, Phonix, Dragon

// Requisitos para montar um char: Hp full - Hp atual - Name - Atk, Def atk

// Heros



class Character {

    _life= 1;
    maxLife= 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life(){
        return this._life;
    }
    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor() {
        super('Knight');
        this.life = 220;
        this.attack = 8;
        this.defense = 16;
        this.maxLife = this.life;
    }
}

class Mage extends Character {
    constructor() {
        super('Mage');
        this.life = 200;
        this.attack = 12;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Thief extends Character {
    constructor() {
        super('Thief');
        this.life = 140;
        this.attack = 15;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Archer extends Character {
    constructor() {
        super('Archer');
        this.life = 180;
        this.attack = 10;
        this.defense = 12;
        this.maxLife = this.life;
    }
}

// Monsters

class Orc extends Character {
    constructor() {
        super('Orc');
        this.life = 150;
        this.attack = 8;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Golem extends Character {
    constructor() {
        super('Golem');
        this.life = 480;
        this.attack = 3;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class Phonix extends Character {
    constructor() {
        super('Phonix');
        this.life = 160;
        this.attack = 14;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class Dragon extends Character {
    constructor() {
        super('Dragon');
        this.life = 100;
        this.attack = 18;
        this.defense = 7;
        this.maxLife = this.life;
    }
}

// cenário

//Precisa das informações de quem está lutando char1 vs monster1 - qual a div que tem a o info do lutador 1 e do lutador 2 - nesse caso os ID são #monster e #char

// precisa atualizar as vidas dos lutadores - quando alguem atacar, irá reduzir a vida, precisa atualizar para a vida atual

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {

        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    
    }   

    start() {
        this.update();
        //TODO: Evento do botão de atacar

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));

        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update() {
        // Fighter1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP` ;
        
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100; // para pegar a porcentagem de vida
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`


        // Fighter2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP` ;

        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100; // para pegar a porcentagem de vida
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
        

    }

    // Attacks

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage(`Não precisa mais atacar ele já morreu. `);
            return;
        }

        let attackFactory = (Math.random() * 2).toFixed(2);

        let defenseFactory = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactory;

        let actualDefense = attacked.defense * defenseFactory;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        }

        else {
            this.log.addMessage(`${attacked.name} consegui defender...`)
        }

        this.update();
    }

}

// LOG

class Log {
    list = [];
    

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}



