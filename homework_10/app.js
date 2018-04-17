class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    getValue() {
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


function addValidator(obj, validator, invalidMessage){
  if (!obj.hasOwnProperty("originalSetValue")) obj.originalSetValue = obj.setValue.bind(obj);
  if (!obj.hasOwnProperty("validators")) obj.validators = [];
  
  obj.validators.push([validator, invalidMessage]);
  
  obj.setValue = function(value){
    this.validatorMessages = []
    this.originalSetValue(value);
    isValid = true;
    for (validator of this.validators){
      validationResult = validator[0](value);
      if (!validationResult) this.validatorMessages.push(validator[1]);
      //console.log("Validation for " + value + " for " + validator[1] + " result " + validationResult);
      isValid = isValid && validationResult;
    }
    this.valid = isValid;
  }
  obj.setValue(obj.getValue());
}

let RequiredValidator = val => (val != undefined) && (val.toString().length > 0);
let MaxLenValidator = maxLen => val => (val != undefined) && val.toString().length <= maxLen;
let NumericValidator = val => typeof val == "number";

let AddRequiredValidation = (obj) => addValidator(obj, RequiredValidator, "RequiredValidation didn't pass");
let AddMaxLengthValidation = (obj, MaxLen) => addValidator(obj, MaxLenValidator(MaxLen), "MaxLength didn't pass");
let AddNumberValidation = (obj) => addValidator(obj, NumericValidator, "Numeric validator didn't pass");


 //The desired behaviour would be
AddRequiredValidation(numberInput);
AddMaxLengthValidation(numberInput, 20);
AddNumberValidation(numberInput);
console.log(numberInput.valid)// ---> false, because of required validator
numberInput.setValue("1");
console.log(numberInput.valid)// ---> false, because of number validator
numberInput.setValue(1);
console.log(numberInput.valid) //---> true, all validators pass
numberInput.setValue(1111111111111111111111111111);
console.log(numberInput.valid)// ---> false, because of max length validator

// Notice after applying some validator to an object, it gets additional "valid" property;

