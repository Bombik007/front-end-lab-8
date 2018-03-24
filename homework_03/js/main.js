function Company(name, owner, maxCount) {
    this.companyName = name;
    this._owner = owner;
    this._maxCount = maxCount;
    this.timeInCompany;
    this._employeeList = [];
    this._logs = [];

    
    this.addNewEmployee = function(emp) {
        _employeeList.push(emp);
        _logs.push("addNewEmployee");
    }

    this.removeEmployee = function() {
        let resultSalary = 0;
        let index;

        for (let i = 0; i < _employeeList.length; i++) {
            if (_employeeList[i].salary > resultSalary) {
                resultSalary = _employeeList[i].salary;
                index = i;
            }
        }
        _employeeList.splice(i, 1);
        _logs.push("removeEmployee");
    }
    this.getAvarageSalary = function() {
        let sum = 0;

        _employeeList.forEach(function(item) {
            sum += _employeeList[item].salary;
        });

        _logs.push("getAvarageSalary");
        return sum/_employeeList.length;
    }

    this.getEmployees = function() {
        _logs.push("getEmployees");
        return _employeeList;
    }

    this.getFormattedListOfEmployees = function() {
        _logs.push("getFormattedListOfEmployees");
        console.log(`${name} -  works in ${companyName} ${timeInCompany} seconds`);
    }

    this.getAvarageAge = function() {
        let averageAge = 0;

        _employeeList.forEach(function(item) {
            averageAge += _employeeList[item].salary;
        });

        _logs.push("getAvarageAge");
        return averageAge/_employeeList.length;
    }

    this.getHistory = function() {
        _logs.push("getHistory");
        return _logs;
    }
}

function Employee(name, primarySkill, age, salary) {
    this._name = name;
    this._primarySkill = primarySkill;
    this._age = age;
    this._salary = salary;
    this._workTime;
    this.employeeLog;

    this.getSalary = function() {
        return this._salary;
    }

    this.setSalary = function(amount) {
        this._salary = amount;
    }

    this.getWorkTimeInSeconds = function() {

    }

    this.hire = function(company) {
        
    }

    this.fire = function() {

    }

    this.getHistory = function() {
        return employeeLog;
    }
}