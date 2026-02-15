const userChoose = prompt("оберіть одне зі списку: 1, 2, 3").trim();
switch (userChoose) {
  case "1":
    console.log("Кава");
    break;
  case "2":
    console.log("Чай");
    break;
  case "3":
    console.log("Сік");
    break;
  default:
    console.log("помилка");
}

const dayOfTheWeek = prompt("введіть день тижня:").trim().toLowerCase();
switch (true) {
  case dayOfTheWeek === "понеділок" ||
    dayOfTheWeek === "вівторок" ||
    dayOfTheWeek === "середа" ||
    dayOfTheWeek === "четвер" ||
    dayOfTheWeek === "пятниця" ||
    dayOfTheWeek === "п'ятниця":
    console.log("це робочий день. потрібно працювати (виконано switch)");
    break;
  case dayOfTheWeek === "субота" || dayOfTheWeek === "неділя":
    console.log("це вихідний. відпочиньте (виконано switch)");
    break;
  default:
    console.log("помилка: ввели щось не правильно (виконано switch)");
    break;
}
if (
  dayOfTheWeek === "пятниця" ||
  dayOfTheWeek === "п'ятниця" ||
  dayOfTheWeek === "четвер" ||
  dayOfTheWeek === "середа" ||
  dayOfTheWeek === "вівторок" ||
  dayOfTheWeek === "понеділок"
) {
  console.log("це робочий день. потрібно працювати (виконано if)");
} else if (dayOfTheWeek === "субота" || dayOfTheWeek === "неділя") {
  console.log("це вихідний. відпочиньте (виконано if)");
} else {
  console.log("помилка: ввели щось не правильно (виконано if)");
}

const numOfMonth = Number(prompt("введіть номер місяця"));
switch (true) {
  case (numOfMonth >= 1 && numOfMonth <= 2) || numOfMonth === 12:
    console.log("це зима (виконано switch)");
    break;
  case numOfMonth >= 3 && numOfMonth <= 5:
    console.log("це весна (виконано switch)");
    break;
  case numOfMonth >= 6 && numOfMonth <= 8:
    console.log("це літо (виконано switch)");
    break;
  case numOfMonth >= 9 && numOfMonth <= 11:
    console.log("це осінь (виконано switch)");
    break;
  default:
    console.log("помилка: не правильно ввели число місяця (виконано switch)");
    break;
}
if ((numOfMonth >= 1 && numOfMonth <= 2) || numOfMonth === 12) {
  console.log("це зима (виконано if)");
} else if (numOfMonth >= 3 && numOfMonth <= 5) {
  console.log("це весна (виконано if)");
} else if (numOfMonth >= 6 && numOfMonth <= 8) {
  console.log("це літо (виконано if)");
} else if (numOfMonth >= 9 && numOfMonth <= 11) {
  console.log("це осінь (виконано if)");
} else {
  console.log("помилка: не правильно ввели число місяця (виконано if)");
}

const userColorChoose = prompt(
  "введіть колір світлофору (червоний, жовтий або зелений)",
)
  .trim()
  .toLowerCase();
switch (userColorChoose) {
  case "червоний":
    console.log("стоп (виконано switch)");
    break;
  case "жовтий":
    console.log("чекати (виконано switch)");
    break;
  case "зелений":
    console.log("йти (виконано switch)");
    break;
  default:
    console.log("помилка: ввели щось не правильно (виконано switch)");
}
if (userColorChoose === "червоний") {
  console.log("стоп (виконано if)");
} else if (userColorChoose === "жовтий") {
  console.log("чекати (виконано if)");
} else if (userColorChoose === "зелений") {
  console.log("йти (виконано if)");
} else {
  console.log("помилка: ввели щось не правильно (виконано if)");
}

const num1 = Number(prompt("введіть перше число:"));
const num2 = Number(prompt("введіть друге число:"));
const operator = prompt("виберіть оператор (+, -, *, /):");
let res;
if (isNaN(num1) || isNaN(num2)) {
    console.log("потрібно вводити число");
} else {
    switch (operator) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("помилка. на нуль ділити не можна")
            } else {
                res = num1 / num2;
            }
            break;
        default:
            console.log("невідомий оператор");
    }
}
console.log(`результат ${num1} ${operator} ${num2} = ${res}`);