const styles = ["Джаз", "Блюз"]

styles.push("Рокк-н-ролл")

styles[Math.floor(styles.length / 2)] = "Классика"

console.log(styles.shift())

styles.unshift("Рэп", "Регги")

console.log(styles)