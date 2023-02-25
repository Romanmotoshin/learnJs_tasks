function Calculator() {

    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    this.calculate = function (str) {
        const arr = str.split(' ')
        let a = +arr[0]
        let b = +arr[2]
        let mt = arr[1]

        if (!this.methods[mt] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[mt](a, b)
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func
    }
}


let calc = new Calculator;

console.log( calc.calculate("3 + 7") );

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result );