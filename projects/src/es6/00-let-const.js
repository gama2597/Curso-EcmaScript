/* 
    - Una variable declarada con var puede ser re-declarada y re-asignada.
    - Una variable declarada con let puede ser re-asignada, pero no re-declarada.
    - Una variable declarada con const no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.
*/

var lastName = "David";
lastname = "Oscar";

console.log(lastName);

let fruit = "Apple";
fruit = 'Kiwi'
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'
        let fruit2 = 'Kiwi'
        const fruit3 = 'Banana'
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();