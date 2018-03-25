function Company(name, owner, maxCount) {
    this.companyName = name;
    this._owner = owner;
    this._maxCount = maxCount;
    this.timeInCompany;
    this._employeeList = [];
    this._logs = [];


    this.addNewEmployee = function(emp) {
        let resultSalary = Infinity;
        let resultIndex;

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
        this._logs.push("addNewEmployee");
    }

    this.removeEmployee = function(index) {
        this._employeeList.splice(index, 1);
        this._logs.push("removeEmployee");
    }
    this.getAverageSalary = function() {
        let sum = 0;

        this._employeeList.forEach(function(item) {
            sum += item._salary;
        });
        this._logs.push("getAverageSalary");

        return sum/this._employeeList.length;
    }

    this.getEmployees = function() {
        this._logs.push("getEmployees");
        return this._employeeList;
    }

    this.getFormattedListOfEmployees = function() {
        this._logs.push("getFormattedListOfEmployees");
        this._employeeList.forEach(function(item) {
            console.log(`${item._name} -  works in ${item.companyName} ${item.timeInCompany} seconds`);
        })
    }

    this.getAverageAge = function() {
        let averageAge = 0;

        this._employeeList.forEach(function(item) {
            averageAge += item.age;
        });

        this._logs.push("getAverageAge");
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
            this.currentCompany = comp.companyName;
            this.employeeLog.push(`${this._name} is hired to ${this.currentCompany} in Mon Mar 12 2018 07:45:55 GMT+0200 (FLE Standard Time)`);

            if (!comp._employeeList.includes(this)) {
                comp.addNewEmployee(this);
            }
        } else {
            console.log("Please try using Company instance");
        }
    }

    this.fire = function(comp) {
        if (comp instanceof Company) {
            this.employeeLog.push(`${this._name} is hired to ${this.currentCompany} in Mon Mar 12 2018 07:45:55 GMT+0200 (FLE Standard Time)`);
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

// let artem = new Employee("Artem",15, 1000, "UX");
// let vova = new Employee("Vova", 16, 2000, "BE");
// let vasyl = new Employee("Vasyl", 25,  1000, "FE");
// let ivan = new Employee("Ivan", 35, 5000, "FE");
// let orest = new Employee("Orest", 29, 300, "AT");
// let anton = new Employee("Anton", 19, 500, "Manager");
// let epam = new Company("Epam", "Arkadii", 5);
// epam.addNewEmployee(artem);
// epam.addNewEmployee(vova);
// epam.addNewEmployee(vasyl);
// epam.addNewEmployee(ivan);
// epam.addNewEmployee(orest);
// epam.addNewEmployee(anton);
// epam.getEmployees();