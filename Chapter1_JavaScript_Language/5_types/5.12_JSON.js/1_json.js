let user = {
    name: "Василий Иванович",
    age: 35
};


const anotherUser = JSON.parse(JSON.stringify(user))

console.log(anotherUser)