function sumSalaries(obj) {
    let arr = Object.values(obj)

    let res = 0;

    for(let salary of arr) {
        res += salary
    }

    return res
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( sumSalaries(salaries) ); 