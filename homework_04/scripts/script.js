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
function Player() {
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
            obj.currentHitpoints = obj.currentHitpoints - this.attack;
        }
    }

    this.isAlive = function() {
        return (currentHitpoints > 0) ? true : false;
    }
}

function Champion(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.hitpoints = obj.hitpoints;
    this.currentHitpoints = obj.hitpoints;
    this.block = 0;

    this.heal = function() {
        if ((this.currentHitpoints + 5) <= this.hitpoins) {
            this.currentHitpoints += 5;
        }
    }

    this.defence = function() {
        this.hitpoins += 1;
        this.block += 1;
    }

    Player.prototype.fight = function(obj) {
        if (obj != this && obj.isAlive()) {
            obj.currentHitpoints = obj.currentHitpoints - this.attack;
        }
        if (!obj.isAlive()) {
            this.attack += 1;
        }
    }
}

Champion.prototype = Object.create(Player.prototype);

function Monster(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.hitpoints = obj.hitpoints;
    this.currentHitpoints = obj.hitpoints;
    this.buff = 0;
    
    
    this.enrage = function() {
        this.buff += 2;
    }

    this.fury = function() {
        if (this.hitpoins > 5) {
            this.hitpoins -= 5;
            this.currentHitpoints -=5;
            this.attack += 2;
        } else {
            console.log("Soryan, bratan. You're a deadman");
        }
    }

    this.eatFlesh = function(obj) {
        this.currentHitpoints += 0;
    }

    Player.prototype.fight = function(obj) {
        let damage = this.attack;
        if ((obj != this) && obj.isAlive()) {
            if (this.buff > 0){
                damage *= 2;
                this.buff -= 1;
            }
            if (obj.block > 0) {
                damage = 0;
                obj.block -= 1;
            }
            obj.currentHitpoints = obj.currentHitpoints - damage;
        }
    }
}

Monster.prototype = Object.create(Player.prototype);