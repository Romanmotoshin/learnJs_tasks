let date = new Date(2012, 0, 3); 

function getWeekDay(date) {
    const week = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]

    return week[date.getDay()]
}

console.log( getWeekDay(date) );   