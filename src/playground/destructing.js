/*
* Object Destructring <uses {} braces>
*/

const person = {
    name: "Vishal",
    age: 32,
    loction:{
        city: "Minneapolis",
        temp: -1
    }
}
const { name, age } = person;
// console.log(`${name} is ${age} years old.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
       
    }
}
const { title: bookTitle, author: bookAuthor } = book;
const { name: bookPublisher = 'Self Published'} = book.publisher;
//console.log(`Book name: ${bookTitle} authored by ${bookAuthor}`);
//console.log(`Book is pblished by ${bookPublisher}`);

/*******************************************************************/

/*
* Array Destructring <uses [] braces>
*/

const address = ['1229 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [street] = address;
const [,city] = address;
const [,,state] = address;
const [,,,year] = address;
// console.log(`Street : ${street}`);
// console.log(`City : ${city}`);
// console.log(`State : ${state}`);
// console.log(`Year : ${year}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, smallPrice, mediumPrice, largePrice] = item;
console.log(`A small ${coffee} costs ${smallPrice}`);
console.log(`A medium ${coffee} costs ${mediumPrice}`);
console.log(`A large ${coffee} costs ${largePrice}`);
















