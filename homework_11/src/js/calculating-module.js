const calcModule = {
    result: 0,
    adding: (a, b) => this.result = a + b,
    diminution: (a, b) => this.result = a - b,
    multiply: (a, b) => this.result = a * b,
    division: (a, b) => (b !== 0) ? this.result = a/b : "Cannot proceed"
}

export default calcModule;