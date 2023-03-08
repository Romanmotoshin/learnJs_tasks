let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

//Можно хранить в weakMap

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
