function unique(arr) {
    let res =[]

    for(let item of arr) {
        if(!res.includes(item)) {
            res.push(item)
        }
    }

    return res
}
  
let strings = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); 