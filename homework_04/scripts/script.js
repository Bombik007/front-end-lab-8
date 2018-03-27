function assign(res) {
    let result = res;

    function addProps(obj) {
        for (let i in obj) {
            if (obj.hasOwnProperty(i) && (typeof obj === 'object')) {
                result[i] = obj[i];
            }
        }
        return result;
    }

    [].forEach.call(arguments, function (item) {
        addProps(item);
    })

    return result;
}


function Player(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.hitpoints = obj.hitpoints;
    this.currentHitpoints = obj.hitpoints;

}

Player.prototype.getHitpoints = function() {
    return this.currentHitpoints;
}

Player.prototype.setHitpoints = function(hp) {
    this.currentHitpoints = hp;
}

Player.prototype.getTotalHitpoints = function() {
    return this.hitpoins;
}

Player.prototype.setTotalHitpoints = function(hp) {
    this.hitpoins = hp;
}

Player.prototype.getAttack = function() {
    return this.attack;
}

Player.prototype.setAttack = function(pts) {
    this.attack = pts;
}

Player.prototype.fight = function(obj) {
    if ((obj != this) && obj.isAlive()) {
        obj.setHitpoints(obj.getHitpoints() - this.getAttack());
    }
}

Player.prototype.isAlive = function() {
    return this.getHitpoints() > 0;
}


function Champion(obj) {
Player.apply(this, arguments);
    this.block = 0;
}

Champion.prototype = Object.create(Player.prototype);
Champion.prototype.constructor = Champion;


Champion.prototype.getBlock = function() {
    return this.block;
}

Champion.prototype.setBlock = function(pts) {
    this.block = pts;
}

Champion.prototype.heal = function() {
    if ((this.currentHitpoints + 5) <= this.hitpoins) {
        this.setHitpoints(this.getHitpoints() + 5);
    }
}

Champion.prototype.defence = function() {
    this.setHitpoints(this.getHitpoints() + 1);
    this.setBlock(this.getBlock() + 1);
}

Player.prototype.fight = function(obj) {
    if (obj != this && obj.isAlive()) {
        obj.setHitpoints(obj.getHitpoints() - this.getAttack());
    }
    if (!obj.isAlive()) {
        this.setAttack(this.getAttack() + 1);
    }
}




function Monster(obj) {
    Player.apply(this, arguments);
    this.buff = 0;
}

Monster.prototype = Object.create(Player.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.getBuff = function() {
    return this.buff;
}

Monster.prototype.setBuff = function(pts) {
    this.buff = pts;
}

Monster.prototype.enrage = function() {
    this.setBuff(this.getBuff() + 2);
}

Monster.prototype.fury = function() {
    if (this.getTotalHitpoints() > 5) {
        this.setTotalHitpoints(this.getTotalHitpoints() - 5);
        this.setHitpoints(this.getHitpoints() - 5);
        this.setAttack(this.getAttack() + 2);
    } else {
        console.log("Soryan, bratan. You're a deadman");
    }
}

Monster.prototype.eatFlesh = function(obj) {
    this.setHitpoints(this.getHitpoints() + 0);
}

Player.prototype.fight = function(obj) {
    let damage = this.getAttack();
    if ((obj instanceof Champion) && obj.isAlive()) {
        if (this.getBuff > 0){
            damage *= 2;
            this.setBuff(this.getBuff() - 1);
        }
        if (obj.getBlock() > 0) {
            damage = 0;
            obj.setBlock(obj.getBlock() - 1);
        }
        obj.setHitpoints(obj.getHitpoints() - damage);
    }
}

// var hunter = new Champion({name: "Rexxar", attack: 10, hitpoints: 60});
// var beast = new Monster({name: "King Krush", attack: 8, hitpoints: 80});
// hunter.fight(beast);
// beast.getHitpoints();
// beast.enrage();
// hunter.fight(beast);
// beast.getHitpoints(); 
// beast.fight(hunter);
// hunter.getHitpoints(); 