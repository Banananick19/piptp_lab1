const fs = require('fs');

// асинхронное чтение
fs.readFile('hello.txt', 'utf8', function (error, data) {
    console.log('Асинхронное чтение файла');
    if (error) throw error; // если возникла ошибка
    console.log(data); // выводим считанные данные
});

// синхронное чтение
console.log('Синхронное чтение файла');
let fileContent = fs.readFileSync('hello.txt', 'utf8');
console.log(fileContent);

fs.writeFile('hello.txt', 'Hello мир!', function (error) {
    if (error) throw error; // если возникла ошибка
    console.log(
        'Асинхронная запись файла завершена. Содержимое файла:'
    );
    let data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data); // выводим считанные данные
});