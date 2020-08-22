//jshint esversion:6

/*Using Native Package*/
const fs = require('fs');
// destination.txt will be created or overwritten by default.
fs.copyFileSync('source.txt', 'destination.txt');
console.log('source.txt was copied to destination.txt');


/*Using External Package*/
const superheroes = require('superheroes');
console.log(superheroes.all);
console.log(superheroes.random());

/*Using External Package*/
const supervillains = require('supervillains');
console.log(supervillains.all);
console.log(supervillains.random());
