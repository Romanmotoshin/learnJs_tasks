function randomInteger(min, max) {
    
    let rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
  }
  
  console.log( randomInteger(1, 3) );
  console.log( randomInteger(7, 20) );
  console.log( randomInteger(0, 5) );
  console.log( randomInteger(12, 100) );