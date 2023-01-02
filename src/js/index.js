import '../scss/main.scss';

/* place your code below */

console.table([1, 2, 3, 4, 5]);

const deathStar = {
    fire: (target) => {
        console.log(`${target} destroyed`);
    },
    diameter: 12000,
    isOperating: true,
    title: 'Death Star',
    levels: 357,
    population: 11000,
    commander: {
        name: 'Darth Vader',
        age: 44,
    }
}

console.dir(deathStar);
console.log(deathStar);
console.dir(deathStar.commander);
console.log(deathStar.commander);

deathStar.fire('R2D2');