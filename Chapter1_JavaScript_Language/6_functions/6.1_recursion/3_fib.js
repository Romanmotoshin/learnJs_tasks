function fib(n) {

    if(n <= 1) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
}


console.log(fib(10))

function fibFast(n) {

    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;

}


console.log(fibFast(77))