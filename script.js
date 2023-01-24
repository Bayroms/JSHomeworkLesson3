// 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function TripleDigit(num) {
    return (result = num ** 3);
}

console.log(TripleDigit(2) + TripleDigit(3));

// 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let num = Number(prompt("Enter number"));

(isNaN(num) == true) ? alert("Enter number, not a text!"): PaymentWithoutTaxes(num)

function PaymentWithoutTaxes(num) {
    let result = num * 0.87;
    return (console.log("Your payment after tax deduction will be " + result))
}

// 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter third number"));

function WitchNumberIsLarger(num1, num2, num3) {
    let max = num1;
    if (max < num2) {
        max = num2;
    }
    if (max < num3) {
        max = num3;
    }
    return (console.log(max + " is the largest number"))
}
WitchNumberIsLarger(num1, num2, num3)

// 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо
// вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
// не нужно.

let task = Number(prompt(`Enter 1 if you want to get summ
Enter 2 if you want to get subtraction
Enter 3 if you want to get product
Enter 4 if you want to get division`));
switch (task) {
    case 1:
        GetSum(); // Если пытаюсь сделать return GetSum() без break, то в браузере выдает Uncaught SyntaxError: Illegal return statement (at script.js:63:9), потому везде оставил break
        break;
    case 2:
        GetSub();
        break;
    case 3:
        GetProduct();
        break;
    case 4:
        GetDivision();
        break;
    default:
        (console.log('Choose number from 1 to 4'));
        break;
}

function GetNumber(numberName) {
    return num = Number(prompt(`Enter ${numberName} number`));
}

function GetSum() {
    let a = GetNumber("first");
    let b = GetNumber("second");
    let sum = a + b;
    console.log('summ of this digits = ' + sum);
}

function GetSub() {
    let a = GetNumber("first");
    let b = GetNumber("second");
    (a > b) ? subtraction = a - b: subtraction = b - a;
    console.log('subtraction of this digits = ' + subtraction);
}

function GetProduct() {
    let a = GetNumber("first");
    let b = GetNumber("second");
    let product = a * b;
    console.log('product of this digits = ' + product);
}

function GetDivision() {
    let a = GetNumber("first");
    let b = GetNumber("second");
    let division = a / b;
    console.log('division of this digits = ' + division);
}