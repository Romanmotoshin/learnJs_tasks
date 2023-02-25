function filterRangeInPlace(arr, a, b) {
    
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] <= b && arr[i] >= a)) {
            arr.splice(i, 1)
            i--
        }
    }
}


let arr = [5, 3, 8, 1 ];

filterRangeInPlace(arr, 1, 4);

console.log( arr );