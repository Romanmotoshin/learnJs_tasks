function printNumbersInterval(from, to) {

    let time = from

    const timer = setInterval(() => {
        console.log(time)
        if (time === to) {
            clearInterval(timer)
        }
        time++
    }, 1000)
}


printNumbersInterval(10, 20)

function printNumbersTimeout(from, to) {

    let time = from;

    setTimeout(function go() {

      console.log(time);

      if (time < to) {
        setTimeout(go, 1000);
      }

      time++;

    }, 1000);
}

printNumbersTimeout(1, 15)



