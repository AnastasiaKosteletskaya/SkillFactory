//Задание 8.7.1
const person = {
    name: 'Anastasia',
    age: '33'
};
function printInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
};
const userData = printInfo.call(person);
console.log(userData);


//Задание 8.7.2
function calculate(a, b, operator) {
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if(b === 0) {
                console.log("На ноль делить нельзя.");
                return undefined;
            } else return a / b;
        default:
            console.log("Неизвестный оператор.");
            return undefined;
    }
}
const values = {
    a: 2,
    b: 3,
    operator: '+'
};

const result = calculate.apply(null, [2, 3, '+']);

console.log(result);

//Задание 8.7.3

const users = [
    { name: "Ivan", age: 16 },
    { name: "Alex", age: 21 },
    { name: "Rob", age: 18 },
    { name: "Den", age: 15 },
    { name: "Bob", age: 22 }
];

const adults = users.filter(users => users.age >= 18 );
const usersNames = users.map(user => user.name);
const adultsNames = adults.map(user => user.name);

console.log(adults); 
console.log(usersNames);
console.log(adultsNames);

//Задание 8.7.4

const person1 = {
    name: 'Anastasia',
    age: '33',
    fullName: ''
};

function setFullName(newFullName) {
    this.fullName = newFullName;
}

const setPersonFullName = setFullName.bind(person1);

setPersonFullName("John Smith");

console.log(person1)

//Задание 8.7.5
function uniqueSortedNumbers(arr) {
    const unique = Array.from(new Set(arr));

    unique.sort((a, b) => a - b);
    return unique;
}


const numbers = [5, 3, 8, 3, 2, 1, 5, 8, 10];
const uniqueSorted = uniqueSortedNumbers(numbers);
console.log(uniqueSorted);
