const fs = require('fs');

let questions = fs.readFileSync('questions.txt', 'utf8');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write(questions);
writeableStream.end('Завершение записи');
let readableStream = fs.createReadStream(
    'hello.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});