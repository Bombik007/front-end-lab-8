function Company(obj) {
    this.companyName = obj.name;
    this._owner = obj.owner;
    this._maxCount = obj.maxCount;
    this._employeeList = [];
    this._dateStartCompany = Date(Date.now());
    this._logs = [`${this.companyName} was created in ${this._dateStartCompany}`];
    


    this.addNewEmployee = function(emp) {
        let resultSalary = Infinity;
        let resultIndex;
        let dateStart = Date(Date.now());

        if(!(emp instanceof Employee)) {
            console.log("Please try to add Employee instance");
            return;
        }
        if (this._employeeList.length >= this._maxCount) {
            this._employeeList.forEach(function (item, i) {
                if (item._salary < resultSalary) {
                    resultSalary = item._salary;
                    resultIndex = i;
                }
            })
            this.removeEmployee(resultIndex);
        }
        this._employeeList.push(emp);
        if (emp.currentCompany != this.companyName) {
            emp.hire(this);
        }

        this._logs.push(`${emp._name} starts working at ${this._currentCompany} in ${dateStart}`);
    }

    this.removeEmployee = function(index) {
        let dateEnd = Date(Date.now()); 

        this._employeeList.splice(index, 1);
        this._logs.push(`${this._employeeList[index]._name} ends working at ${this._name} in ${dateEnd}`);
    }

    this.getAvarageSalary = function() {
        let sum = 0;

        this._employeeList.forEach(function(item) {
            sum += item._salary;
        });

        return sum/this._employeeList.length;
    }

    this.getEmployees = function() {
        return this._employeeList;
    }

    this.getFormattedListOfEmployees = function() {
        let result = "";

        this._employeeList.forEach(function(item){
            result += `${item._name} -  works in ${this.companyName} seconds\n`;
        });

        return result;
    }

    this.getAvarageAge = function() {
        let averageAge = 0;

        this._employeeList.forEach(function(item) {
            averageAge += item.age;
        });

        this._logs.push("getAverageAge");
        return (averageAge/this._employeeList.length);
    }

    this.getHistory = function() {
        return this._logs;
    }
}



function Employee(obj) {
    this._name = obj.name;
    this._primarySkill = obj.primarySkill;
    this._age = obj.age;
    this._salary = obj.salary;
    this._currentCompany;
    this._workTime = 0;
    this.employeeLog = [];

    this.getSalary = function() {
        return this._salary;
    }

    this.setSalary = function(amount) {
        if ((isFinite(newSalary)) && (typeof amount === 'number')) {

        }
        this._salary = amount;
    }

    this.getWorkTimeInSeconds = function() {
        let result = 0;

        if (this._currentCompany) {
            result += (Date(Date.now()) - this._workTime);
        }

        return result/1000;
    }

    this.hire = function(comp) {
        let dateStart = new Date(Date.now());

        if (comp instanceof Company) {
            this.currentCompany = comp.companyName;
            this.employeeLog.push(`${this._name} is hired to ${this._currentCompany} in ${dateStart}`);

            if (!comp._employeeList.includes(this)) {
                comp.addNewEmployee(this);
            }
        } else {
            console.log("Please try using Company instance");
        }
    }

    this.fire = function(comp) {
        let dateEnd = new Date(Date.now());

        if (comp instanceof Company) {
            this.employeeLog.push(`${this._name} is hired to ${this._currentCompany} in ${dateEnd}`);
            this.currentCompany = "self-employed";
            if (comp._employeeList.includes(this)) {
                comp.removeEmployee(this);
            }
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

let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());

epam.removeEmployee(2);

console.log(vasyl.getHistory());

console.log(epam.getAvarageSalary()); // -> 2125
console.log(epam.getAvarageAge());  // -> 21.25

epam.addNewEmployee(5,6,9,5); // -> Please try to add Employee instance

setTimeout(() => {
   epam.removeEmployee(1);
   console.log(artem.getWorkTimeInSeconds()); // -> 5.5744444444444445
}, 5000);

vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getHistory());