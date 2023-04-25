let log = new Log(document.querySelector('.log'));
let char = new  Mage();
let monster = new Phonix();

console.log(char.name);
console.log(char)
console.log(monster)

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();