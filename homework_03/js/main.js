function Company(obj) {
    this.companyName = obj.name;
    this._owner = obj.owner;
    this._maxCount = obj.maxCount;
    this._employeeList = [];
    this._logs = [`${this.name} was created in ${this._dateOfCreation}`];


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

        this._logs.push(`${emp.name} starts working at ${this.name} in ${dateStart}`);
    }

    this.removeEmployee = function(index) {
        let dateEnd = Date(Date.now()); 

        this._employeeList.splice(index, 1);
        this._logs.push(`${this._employeeList[index].name} ends working at ${this.name} in ${dateEnd}`);
    }

    this.getAverageSalary = function() {
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
            result += `${item.name} -  works in ${item.getCompanyName()} ${item.getTimeInCompany()} seconds\n`;
        });

        return result;
    }

    this.getAverageAge = function() {
        let averageAge = 0;

        this._employeeList.forEach(function(item) {
            averageAge += item.age;
        });

        this._logs.push("getAverageAge");
        return (averageAge/this._employeeList.length);
    }

    this.getHistory = function() {
        return _logs;
    }
}



function Employee(obj) {
    this._name = obj.name;
    this._primarySkill = obj.primarySkill;
    this._age = obj.age;
    this._salary = obj.salary;
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