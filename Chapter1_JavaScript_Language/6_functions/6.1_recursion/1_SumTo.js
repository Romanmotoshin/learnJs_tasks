function sumToCycle(n) {

    let res = 0;

    for (let i = 1; i <= n; i++) {
        res += i;
    }

    return res
}

function sumToRecursion(n) {
    if (n === 1) {
        return 1
    }

    return n + sumToRecursion(n - 1)
}

function sumToProgression(n) {
    return n * (n + 1) / 2;
}

console.log(sumToCycle(5))
console.log(sumToRecursion(5))
console.log(sumToProgression(5))