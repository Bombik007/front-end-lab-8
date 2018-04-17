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


function AddRequiredValidation(val) {
    let bindedSetter = val.setValue.bind(val);
    function validator(target) {
        return ((target != undefined) && (target.toString().length > 0));
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

function AddMaxLengthValidation(val, len) {
    let bindedSetter = val.setValue.bind(val);
    function validator(target) {
        return ((target != undefined) && (target.toString().length <= len));
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

function AddNumberValidation(val) {
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

AddRequiredValidation(numberInput);
AddMaxLengthValidation(numberInput, 20);
AddNumberValidation(numberInput);

console.log(numberInput.valid);
numberInput.setValue("1");
console.log(numberInput.valid);
numberInput.setValue(1);
console.log(numberInput.valid);
numberInput.setValue(1111111111111111111111111111);
console.log(numberInput.valid);