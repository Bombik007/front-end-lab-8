function Company(name, owner, maxCount) {
    this.companyName = name;
    this._owner = owner;
    this._maxCount = maxCount;
    this.timeInCompany;
    this._employeeList = [];
    this._logs = [];
   
    
    this.addNewEmployee = function(emp) {
        let resultSalary = 0;
        let resultIndex;

        if(emp instanceof Employee) {
            if (this._employeeList.length > this.maxCount) {
                this._employeeList.forEach(function(item, i){
                    if (item.salary > resultSalary) {
                        resultSalary = item.salary;
                        resultIndex = i;
                    }
                })
                this._employeeList.splice(resultIndex, 1);
            }
            this._employeeList.push(emp);
            this._logs.push("addNewEmployee");
            if (emp.currentCompany != this) {
                emp.hire(this);
            }

        } else {
            console.log("Please try to add Employee instance");
        }
    }

    this.removeEmployee = function(emp) {
        if (emp.currentCompany == this) {
            emp.fire(this)
        }
        this._logs.push("removeEmployee");
    }
    this.getAvarageSalary = function() {
        let sum = 0;

        this._employeeList.forEach(function(item) {
            sum += item.salary;
        });
        this._logs.push("getAvarageSalary");

        return sum/_employeeList.length;
    }

    this.getEmployees = function() {
        this._logs.push("getEmployees");
        return _employeeList;
    }

    this.getFormattedListOfEmployees = function() {
        this._logs.push("getFormattedListOfEmployees");
        this._employeeList.forEach(function(item) {
            console.log(`${item.name} -  works in ${companyName} ${timeInCompany} seconds`);
        })
    }

    this.getAvarageAge = function() {
        let averageAge = 0;

        this._employeeList.forEach(function(item) {
            averageAge += item.age;
        });

        this._logs.push("getAvarageAge");
        return averageAge/this._employeeList.length;
    }

    this.getHistory = function() {
        this.employeeLog.forEach(function(item) {
            console.log(item);
        });
    }
}



function Employee(name, age, salary, primarySkill) {
    this._name = name;
    this._primarySkill = primarySkill;
    this._age = age;
    this._salary = salary;
    this._currentCompany;
    this._workTime;
    this.employeeLog = [];

    this.getSalary = function() {
        return this._salary;
    }

    this.setSalary = function(amount) {
        this._salary = amount;
    }

    this.getWorkTimeInSeconds = function() {
        
    }

    this.hire = function(comp) {
        if (comp instanceof Company) {
            this.currentCompany = comp;
            this.employeeLog.push(`${this.name} is hired to ${this.currentCompany} in Mon Mar 12 2018 07:45:55 GMT+0200 (FLE Standard Time)`);
            if (!comp._employeeList.includes(this)) {
                comp.addNewEmployee(this);
            }
        } else {
            console.log("Please try using Company instance");
        }
    }

    this.fire = function(comp) {
        if (comp instanceof Company) {
            if (comp._employeeList.includes(this)) {
                comp.removeEmployee(this);
            }
            this.employeeLog.push(`${this.name} is hired to ${this.currentCompany} in Mon Mar 12 2018 07:45:55 GMT+0200 (FLE Standard Time)`);
        } else {
            console.log("Please try using Company instance");
        }
        
    }

    this.getHistory = function() {
        this.employeeLog.forEach(function(item) {
            console.log(item);
        });
    }
}