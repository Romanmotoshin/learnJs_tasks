function sumInput() {

    const arr = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    return arr.reduce((acc, sum) => acc + sum, 0)
  }
  
console( sumInput() );