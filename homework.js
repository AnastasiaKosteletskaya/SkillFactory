
//Задание 6.10.1

/*const number = prompt('введите число');
alert(`Введенное число - ${number}
Квадрат числа  - ${number ** 2}
Куб числа - ${number ** 3}`
)

//Задание 6.10.2

const promoСode = prompt('Введите промокод')
if (promoСode.toUpperCase ==="скидка") {
    alert('Промокод применен');
}
    else {alert('Промокод не действует');
} 



//Задание 6.10.3
const userName = prompt('Введите свое имя:');
const userBirthYear = prompt('Введите год своего рождения');
const currentYear = new Date().getFullYear();
const userAge = currentYear - userBirthYear;
if (isNaN(parseInt(userBirthYear))) {
    alert('Год должен быть числом!');
} else {alert(`${userName}:${userAge}`);}


//Задание 6.10.4

const userName = prompt('Введите свое имя:');
const userBirthYear = prompt('Введите год своего рождения');
const currentYear = new Date().getFullYear();
const userAge = currentYear - userBirthYear;
let ageStr;
let lastDigit = userAge % 10;
if (lastDigit === 1 && userAge % 100 !== 11) {
    ageStr = "год";
} else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(userAge % 100)) {
    ageStr = "года";
} else {
    ageStr = "лет";
}
if (isNaN(parseInt(userBirthYear)) || userName === null || userName.trim() === "") {
    alert('Некорректный год или пустое имя');
} else {
    alert(`${userName}: ${userAge} ${ageStr}`);
} */

//Задание 7.6.1
const leftToRight = 'Довод'
let rightToLeft = '';
for (let i = leftToRight.length - 1; i >= 0; i -= 1) {
        rightToLeft += leftToRight[i];
}

if (leftToRight.toLowerCase() === rightToLeft.toLowerCase())
{
    console.log(`Слово ${leftToRight} является палиндромом`);
} else {
    console.log(`Слово ${leftToRight} не является палиндромом`);
}
    

//Задание 7.6.2

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const setFromArr = new Set(arr);
const resultArr = Array.from(setFromArr);
console.log(resultArr);


//Задание 7.6.3

const userInput = prompt('введите число');
let number = Number(userInput);
if (!isNaN(number) && number >= 0) {
  let array = [];
  for (let i = 0; i <= number; i+=1) {
    array.push(i);
  }
  console.log(array);
} else {
    alert (`Пожалуйста, введите число`);
}


//Задание 7.6.4

for (let i = 1; i <=3; i += 1){
let row = '';
    for (let j = 1; j <=3; j += 1){
        row += (i + j) % 2 === 0 ? 'x' : 'o';
        if (j < 3) row += ' ';
    }
    console.log(row);
}


//Задание 7.6.5

const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
};
let arrValues = [];
for (key in obj) {
    if (Array.isArray(obj[key])){
        arrValues = arrValues.concat(obj[key]);
    } else {
       arrValues.push(obj[key]); 
}
}

console.log(arrValues);



 
    












