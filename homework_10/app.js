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

class TextInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "text";
    }
}

let numberInput = new NumberInput("Type numbers...");

const AddRequiredValidation = function(val) {
    let bindedSetter = val.setValue.bind(val);
    function validator(target) {
        return ((target != null) && (target.length > 0));
    }

    val.valid = validator(val.value);
    if (!val.valid) {
        if (!val.hasOwnProperty("validatorMessages")) {
            val.validatorMessages = [];
        }
        val.validatorMessages.push("AddRequiredValidation didnt pass");
    }

    val.setValue = function(value) {
        bindedSetter(value);
        this.valid = validator(this.value);
    }
}

const AddMaxLengthValidation = function(val, len) {
    let valueSetter = val.setValue.bind(val);
    function validator(target) {
        return target.length <= len;
    }

    val.valid = validator(val.value);
    if (!val.valid) {
        if (!val.hasOwnProperty("validatorMessages")) {
            val.validatorMessages = [];
        }
        val.validatorMessages.push("AddRequiredValidation didnt pass");
    } 

    val.setValue = function(value) {
        bindedSetter(value);
        this.valid = validator(this.value);
    }
}

const AddNumberValidation = function(val) {
    let bindedSetter = val.setValue.bind(val);
    function validator(target) {
        return typeof target == "number";
    }

    val.valid = validator(val.value);
    if (!val.valid) {
        if (!val.hasOwnProperty("validatorMessages")) {
            val.validatorMessages = [];
        }
        val.validatorMessages.push("AddMaxLengthValidation didnt pass");
    }

    val.setValue = function(value) {
        bindedSetter(value);
        this.valid = validator(this.value);
    }
}

// The desired behaviour would be
// console.log(numberInput.valid) ---> false, because of required validator
// numberInput.setValue("1");
// console.log(numberInput.valid) ---> false, because of number validator
// numberInput.setValue(1);
// console.log(numberInput.valid) ---> true, all validators pass
// numberInput.setValue(1111111111111111111111111111);
// console.log(numberInput.valid) ---> false, because of max length validator

// Notice after applying some validator to an object, it gets additional "valid" property;

AddRequiredValidation(numberInput);
AddMaxLengthValidation(numberInput, 20);
AddNumberValidation(numberInput);