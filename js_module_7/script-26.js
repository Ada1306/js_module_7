function Calculator() {
    this.read = function() {
        this.a = parseFloat(prompt("Enter the first number:"));
        this.b = parseFloat(prompt("Enter the second number:"));
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

// Створюємо новий об'єкт Calculator
let calculator = new Calculator();

// Викликаємо метод read, щоб запитати два значення у користувача
calculator.read();

// Виводимо результат сумування
console.log("Sum: " + calculator.sum());

// Виводимо результат множення
console.log("Mul: " + calculator.mul());
