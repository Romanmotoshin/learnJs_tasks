const answer = prompt("Кто там?", "")

if (answer === null || answer === "") {
    alert("Отменено")
} else if (answer === "Админ") {
    const password = prompt("Введите пароль","")
    if (password === null || password === "") {
        alert("Отменено")
    } else if (password === "Я Главный") {
        alert("Здравтсуйте")
    } else {
        alert("Неверный пароль")
    }
} else {
    alert("Я вас не знаю")
}