const firstName = "Irek";
const age = 35;

const greet = (age, firstName) => {
    console.log(
        `Witaj w świecie frontendu, nazywma się ${firstName} i mam ${age} lata.`
    )
}
greet(35, 'Irek');

console.log(`Elo Elo 3 - 5 - 0! Jestem ${firstName} i mam ${age} lat.`);

let heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Elo Elo 3 - 5 - 0! Jestem ${firstName} i mam ${age} lat.`;

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}
createContent('.week-summary__description--js', 'Nawet uzupelniłem treść!');

const button = document.querySelector('.action--js');
console.log(button);

button.addEventListener('click', () => {
    const heading = document.querySelector(".main__heading--js");
    heading.innerHTML = 'Witaj drogi odwiedzajacy, jestem IMO!';
    heading.classList.toggle('klasa-z-js');
});