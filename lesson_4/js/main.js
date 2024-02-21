var a = 5; // Объявление переменной a и присвоение ей значения 5
var b = 2; // Объявление переменной b и присвоение ей значения 2
var str_ = 'word'; // Объявление переменной str_ и присвоение ей значения 'word'

// Проверка условия: если a больше чем b
if(a > b){
    console.log(a,'больше чем',b); // Вывод в консоль значения a, строку 'больше чем' и значение b
    // Вложенная проверка условия: если a больше или равно 1
    if (a >= 1) {
        console.log('ок!'); // Вывод в консоль строки 'ок!'
    }
} 
// Ветка else if: если a меньше чем b
else if(a < b) {
    console.log(b,'больше чем',a); // Вывод в консоль значения b, строку 'больше чем' и значение a
}
// Ветка else: если a равно b
else{
    console.log(a,'равно',b); // Вывод в консоль значения a, строку 'равно' и значение b
}

// Проверка условия: если a больше чем 1 или b больше чем 3
if(a > 1 || b > 3){
    console.log('a > 1 или b > 2'); // Вывод в консоль строки 'a > 1 или b > 2'
}

// Проверка условия: если a имеет значение и b имеет значение
if (a && b){
    console.log('Правда! и Правда!'); // Вывод в консоль строки 'Правда! и Правда!'
}


/*
Конструкция switch для переменной str_

Конструкция switch используется для выбора действия на основе значения переменной.
Это позволяет упростить и сделать более читаемым код,
который содержит множество условных операторов if-else.
*/
switch (str_){
    case "4": 
        console.log('Переменная со значением 4'); // Вывод в консоль строки 'Переменная со значением 4'
        break;

    case "5":
        console.log('Переменная со значением 5'); // Вывод в консоль строки 'Переменная со значением 5'
        break;

    case 'word':
        console.log('Переменная со word'); // Вывод в консоль строки 'Переменная со word'
        break;

    default:
        console.log('default'); // Вывод в консоль строки 'default', если значение str_ не совпадает ни с одним из case
}
