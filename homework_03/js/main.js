function Company(name, owner, maxCount) {
    this.companyName = name;
    this._owner = owner;
    this._maxCount = maxCount;
    this.timeInCompany;

    let _employeeList = [];
    let _logs = [];
    
    this.addNewEmployee = function() {

    }

    this.removeEmployee = function() {

    }

    this.getAvarageSalary = function() {

    }

    this.getEmployees = function() {

    }

    this.getFormattedListOfEmployees = function() {
        console.log(`${name} -  works in ${companyName} ${timeInCompany} seconds`);
    }

    this.getAvarageAge = function() {

    }

    this.getHistory = function() {

    }
}

function Employee(name, primarySkill, age, salary) {
    this._name = name;
    this._primarySkill = primarySkill;
    this._age = age;
    this._salary = salary;
    this._workTime;
    this._log;

    this.getSalary = function() {
        return this._salary;
    }

    this.setSalary = function(amount) {
        this._salary = amount;
    }

    this.getWorkTimeInSeconds = function() {

    }

    this.hire = function() {

    }

    this.fire = function() {

    }

    this.getHistory = function() {

    }
}