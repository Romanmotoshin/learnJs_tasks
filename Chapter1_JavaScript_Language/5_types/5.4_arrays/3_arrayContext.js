let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // выведет arr, функция является методом, this указывает на этот массив

