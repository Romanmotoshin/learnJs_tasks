function topSalary(salaries) {

    let maxSalary = 0;
    let nameMax = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        nameMax = name;
      }
    }
  
    return nameMax;
  }


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries))