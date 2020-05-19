const fs = require('fs');

const data = {
    "text1": "Hello everybody",
    "text2": "Just hi to everyone who is reading this"
}

console.time();
fs.writeFile('./teste.txt', data.text2, (err) => {
    if (err) throw err;
    console.log("Arquivo 1 salvo com sucesso");
});
console.timeEnd();