// TODO: remove layout comments before submitting homework
// Task 1
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

// Task 2
function Player(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.hitpoints = obj.hitpoints;
    this.currentHitpoints = obj.hitpoints;

    this.getHitpoints = function() {
        return this.currentHitpoints;
    }

    this.setHitpoints = function(hp) {
        this.currentHitpoints = hp;
    }

    this.getTotalHitpoints = function() {
        return this.hitpoins;
    }

    this.setTotalHitpoints = function(hp) {
        this.hitpoins = hp;
    }

    this.getAttack = function() {
        return this.attack;
    }

    this.setAttack = function(pts) {
        this.attack = pts;
    }
    
    this.fight = function(obj) {
        if ((obj != this) && obj.isAlive()) {
            obj.setHitpoints(obj.getHitpoints() - this.getAttack());
        }
    }

    this.isAlive = function() {
        return this.getHitpoints() > 0;
    }
}

function Champion(obj) {
    this.block = 0;
}

Champion.prototype.constructor = Champion;
Champion.prototype = Object.create(Player.prototype);

Champion.prototype.getBlock = function() {
    return this.block;
}

Champion.prototype.setBlock = function(pts) {
    this.block = pts;
}

Champion.prototype.heal = function() {
    if ((this.currentHitpoints + 5) <= this.hitpoins) {
        this.setHitpoints(this.getHitpoints + 5);
    }
}

Champion.prototype.defence = function() {
    this.setHitpoints(this.getHitpoints + 1);
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
    this.buff += 2;
}

Monster.prototype.fury = function() {
    if (this.getTotalHitpoints() > 5) {
        this.setTotalHitpoints(this.getTotalHitpoints - 5);
        this.setHitpoints(this.getHitpoints - 5);
        this.setAttack(this.getAttack() + 2);
    } else {
        console.log("Soryan, bratan. You're a deadman");
    }
}

Monster.prototype.eatFlesh = function(obj) {
    this.setHitpoints(this.getHitpoints + 0);
}

Player.prototype.fight = function(obj) {
    let damage = this.getAttack();
    if ((obj != this) && obj.isAlive()) {
        if (this.getBuff > 0){
            damage *= 2;
            this.setBuff(this.getBuff - 1);
        }
        if (obj.getBlock() > 0) {
            damage = 0;
            obj.setBlock(obj.getBlock - 1);
        }
        obj.setHitpoints(obj.getHitpoints() - damage);
    }
}