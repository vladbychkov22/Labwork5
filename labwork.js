// 1. Створіть функцію average, яка знаходить середнє значення із довільного числа аргументів,
// використайте spread … оператор

function average(...args) {
  const sum = args.reduce((acc, val) => acc + val, 0);
  return sum / args.length;
}

console.log(average(1, 2, 3, 4, 5)); // виведе 3
console.log(average(2, 4, 6, 8)); // виведе 5

// 2. Створіть функцію values(f, low, high), яка повертає масив значень [f(low), f(low + 1), ...,
// f(high)].

def values(f, low, high):
    result = []
    for i in range(low, high+1):
        result.append(f(i))
    return result

def square(x):
    return x * x

print(values(square, 1, 5))  # виведе [1, 4, 9, 16, 25]


// 3. Своріть функцію callWithContext як приймає обєкт та функцію коллбек яка викликається з
// контекстом пережаного обєкта. Викличте цю функцію з обєктом person з полями імя та вік
// та функцією яка виведе в консоль ‘Today is ${date }! Happy birthday ${name}.

function callWithContext(obj, callback) {
  callback.call(obj);
}

const person = {
  name: 'John',
  age: 30
}

function birthday() {
  const today = new Date();
  console.log(`Today is ${today.toLocaleDateString()}! Happy birthday ${this.name}.`);
}

callWithContext(person, birthday);


// 4. Створіть функцію, яка повертає об’єкт з двома методами: increment і getValue. Метод
// increment має збільшувати значення, яке зберігається в замиканні, а метод getValue має
// повертати поточне значення. 

function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    getValue: function() {
      return count;
    }
  };
}

// Створюємо лічильник
const counter = createCounter();

// Збільшуємо значення
counter.increment();
counter.increment();

// Отримуємо поточне значення
console.log(counter.getValue()); // 2


// 5. Створіть функцію getGreeting яка приймає імя та повертає текстовий фрагмент типу ‘Hello
// name’. Зробіть щоб функція зберігала значення останнього виклику та якщо аикликана
// знову з таким же аргументом – повертала кешовне значення.

function getGreeting() {
  let lastCallName;
  let cachedResult;

  return function(name) {
    if (name === lastCallName) {
      console.log('Returning cached result');
      return cachedResult;
    }
    lastCallName = name;
    cachedResult = `Hello ${name}`;
    console.log('Calculating new result');
    return cachedResult;
  }
}

const greeting = getGreeting();

console.log(greeting('Alice')); // Calculating new result, Hello Alice
console.log(greeting('Bob')); // Calculating new result, Hello Bob
console.log(greeting('Alice')); // Returning cached result, Hello Alice


// 6. Створіть функцію, яка приймає число як аргумент і повертає функцію, яка приймає інше
// число як аргумент і повертає суму двох чисел. Перевірте функцію, викликавши її з різними
// номерами.

function add(x) {
  return function(y) {
    return x + y;
  }
}

const addFive = add(5);
console.log(addFive(3)); // 8

const addTen = add(10);
console.log(addTen(7)); // 17


// 7. Створіть функцію, яка приймає масив текстових фрагментів як аргумент і повертає нову
// функцію, яка приймає текстовий фрагмент як аргумент і повертає логічне значення, яке
// вказує, чи існує текстовий фрагмент у вихідному масиві. 

function isIncludedInArray(arr) {
  return function(fragment) {
    return arr.includes(fragment);
  }
}

// Приклад використання
const words = ['apple', 'banana', 'cherry', 'date'];
const includesWord = isIncludedInArray(words);

console.log(includesWord('banana')); // true
console.log(includesWord('orange')); // false


// 8. Створіть функцію, яка приймає масив об’єктів як аргумент і повертає новий масив об’єктів,
// де певна властивість написана з великої літери. Використовуйте стрілочну функцію.

const capitalizeProp = arr => {
  return arr.map(obj => {
    return {
      ...obj,
      property: obj.property.charAt(0).toUpperCase() + obj.property.slice(1)
    }
  })
}

const objects = [
  { property: 'foo', value: 42 },
  { property: 'bar', value: 13 }
]

const capitalizedProps = capitalizeProp(objects)
console.log(capitalizedProps)
// Output: [
//   { property: 'Foo', value: 42 },
//   { property: 'Bar', value: 13 }
// ]


// 9. Напишіть приклад для демонстрації функцій call, apply, bind.

const person = {
  name: 'John',
  age: 30,
  greet: function(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
};

// Виклик функції звичайним способом:
person.greet('Hello'); // Виведе "Hello, John!"

// Використання функції call для виклику методу з іншим контекстом:
const person2 = { name: 'Kate' };
person.greet.call(person2, 'Hi'); // Виведе "Hi, Kate!"

// Використання функції apply для виклику методу з іншим контекстом та аргументами в масиві:
const args = ['Hey'];
person.greet.apply(person2, args); // Виведе "Hey, Kate!"

// Використання функції bind для створення нової функції зі зміненим контекстом:
const person3 = { name: 'Mark' };
const greetMark = person.greet.bind(person3);
greetMark('Hola'); // Виведе "Hola, Mark!"


// 10. Створіть функцію яка приймає коллбек – викликає його з переданими аргументами та
// виводить в консоль імя функції, аргументи та час коли функція викликана.

function callbackLogger(callback) {
  return function(...args) {
    const date = new Date();
    console.log(`Function "${callback.name}" called with arguments ${JSON.stringify(args)} at ${date.toISOString()}`);
    return callback(...args);
  }
}

function myFunction(a, b) {
  console.log(`myFunction called with arguments ${a} and ${b}`);
}

const loggedFunction = callbackLogger(myFunction);
loggedFunction(1, 2);


// 11. Створіть функцію яка кешує останній виклик на 10 секунд.

function cacheLastCall(func) {
  let lastCall = null;
  
  return function(...args) {
    const now = new Date().getTime();
    if (!lastCall || (now - lastCall.time) > 10000) {
      lastCall = { args, result: func(...args), time: now };
    }
    
    console.log(`Cached value: ${lastCall.result}`);
    return lastCall.result;
  }
}

const add = (a, b) => a + b;
const cachedAdd = cacheLastCall(add);

console.log(cachedAdd(2, 3)); // викличе add(2, 3), поверне 5 та виведе "Cached value: 5" в консоль
console.log(cachedAdd(2, 3)); // не викличе add(), поверне 5 та виведе "Cached value: 5" в консоль
// Пройде більше 10 секунд
console.log(cachedAdd(2, 3)); // викличе add(2, 3), поверне 5 та виведе "Cached value: 5" в консоль