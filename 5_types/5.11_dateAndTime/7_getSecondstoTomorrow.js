function getSecondsToTommorow() {
    let date = new Date();
    return 60*60*24 - date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  }

console.log(getSecondsToTommorow())