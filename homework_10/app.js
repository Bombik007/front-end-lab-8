class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}

let numberInput = new NumberInput("Type numbers...");

// OPTION 1: InputDecorator

const InputDecorator = function(i) {
    this.ins = i;
}

InputDecorator.prototype = new Input();
InputDecorator.prototype = {
    AddRequiredValidation: function() {
        this.ins.valid = !((this.ins.value() === "") || (this.ins.value() == null));
    },
    AddMaxLengthValidation: function(maxLength) {
        this.ins.valid = !(this.ins.value() > maxLength);
    },
    AddNumberValidation: function() {
        this.ins.valid = typeof this.ins.value() != "number";
    }
}


// OPTION 2: InputDecorator2

const InputDecorator2 = function(i) {
    this.ins = i;
}

InputDecorator2.prototype = new Input();
InputDecorator2.prototype = {
    getValue: function() {
        this.ins.value();
    },
    setValue: function(val) {
        this.ins.setValue(val);
    }
}

let AddRequiredValidation = function(ins) {
    InputDecorator2.call(this, ins);
};

AddRequiredValidation.prototype = new InputDecorator2();
AddRequiredValidation.prototype.setValue = function(val) {
    this.ins.valid = !((val === "") || (val == null));
    this.ins.setValue(val);
    if (!this.ins.valid) console.log("AddRequiredValidation didnt pass");
}

let AddMaxLengthValidation =  function(maxLength) {
    InputDecorator2.call(this, ins); 
};  
AddMaxLengthValidation.prototype = new InputDecorator2();
AddMaxLengthValidation.prototype.setValue = function(val) {
    this.ins.valid = !(val > maxLength);
    this.ins.setValue(val);
    if (!this.ins.valid) console.log("AddMaxLengthValidation didnt pass");
}

let AddNumberValidation = function() {
    InputDecorator2.call(this, ins);
};
AddNumberValidation.prototype = new InputDecorator2();
AddNumberValidation.prototype.setValue = function(val) {
    this.ins.valid = typeof val != "number";
    this.ins.setValue(val);
    if (!this.ins.valid) console.log("AddMaxLengthValidation didnt pass");
}


//  Then you can create add validation decorators and add functionality to numberInput
//  AddRequiredValidation Decorator that add required validation
//  AddMaxLengthValidation Decorator that add max length validation
//  AddNumberValidation Decorator for only number values validation


// The desired behaviour would be
// console.log(numberInput.valid) ---> false, because of required validator
// numberInput.setValue("1");
// console.log(numberInput.valid) ---> false, because of number validator
// numberInput.setValue(1);
// console.log(numberInput.valid) ---> true, all validators pass
// numberInput.setValue(1111111111111111111111111111);
// console.log(numberInput.valid) ---> false, because of max length validator

// Notice after applying some validator to an object, it gets additional "valid" property;



