const data = [
    {name:"Marcelo Freitas", age: 45,sallary: 5500, driverLicence: true },
    {name:"Flávia Freitas", age: 45,sallary: 3500, driverLicence: true },
    {name:"Luiz Fiuza", age: 16,sallary: 3500, driverLicence: true },
    {name:"Melissa Leitão", age: 14,sallary: 1000, driverLicence: true },
];

//1 - Reverse
const reverseData = data.reverse();

console.log(reverseData);

//2 - Find
const highSallary = 5000;
const highestSallary = data.find((user) => user.sallary > highSallary);
console.log(highestSallary);

//3 - FindIndex (Exemplo de uso: Encontrar o menor salário e fazer um reajuste ...)
const lowestSallary = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000);
console.log(lowestSallary);
data[lowestSallary].sallary += 1000;
console.log(data);

//4-Includes
const numbers = [1, 2, 3, 4, 5];

const hasFour = numbers.includes(7);
console.log(hasFour);

//5 - map
data.map((user) => (user.newsletter = false));
console.log(data);

//6 - Filter
const drivers = data.filter((user) => user.driverLicence);
console.log(drivers);

//7 - Reduce (Exemplo de uso: somar todos os salários da empresa ...)
const sallariesSum = data.reduce((totalSallary, user) => (totalSallary += user.sallary), 0);
console.log(sallariesSum);
//O zero(0) no final da função tem por objetivo começar a soma "zerada", por se tratar do operador
//incremental " += "

//8 - forEach
const showUserNames = (users) => {
    users.forEach((user) => {

        console.log(`Olá ${user.name} !`);
        
    });
};
showUserNames(data);
//Usado para fazer impressão no frontend de dados, por exemplo ...

//9 - some
let someoneWithNewsletter = data.some((user) => user.newsletter);
data[0].newsletter = true;
someoneWithNewsletter = data.some((user) => user.newsletter);
console.log(someoneWithNewsletter);
//Exemplo de uso: Se alguém possui alguma newsletter, no caso ai no código, foi 
//setado para o primeiro data[0].newsletter

//10 - every
const everyUserHasName = data.every((user) => user.name);
console.log(everyUserHasName);

const everyUserHasGoodSallary = data.every((user) => { 
    return user.sallary > 2000;
});
console.log(everyUserHasGoodSallary);

