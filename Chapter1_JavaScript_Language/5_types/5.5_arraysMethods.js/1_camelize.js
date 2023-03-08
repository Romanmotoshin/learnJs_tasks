function camelize(str) {
    return str.split("-")
    .map((item, i) => {
        if (i === 0) {
            return item
        }
        return item[0].toUpperCase() + item.slice(1)
    })
    .join('')
}




console.log(camelize("background-color") )
console.log(camelize("list-style-image") )
console.log(camelize("-webkit-transition") )