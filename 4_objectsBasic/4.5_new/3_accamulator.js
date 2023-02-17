function Accumulator(startingValue) {
    this.value = startingValue

    this.read = function(number) {
        this.value = this.value + number
    }
}


let accumulator = new Accumulator(1); 

accumulator.read(2); 
accumulator.read(4); 

console.log(accumulator.value);