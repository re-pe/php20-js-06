/** 
 * Tradicinis objektų kūrimas naudojant funkcijas 
*/

console.log("\nTradicinis objektų kūrimas per funkcijas");

import { KnygaF, SaugyklaF } from './function.js';

const knygaF = new KnygaF("Labai rimtas mokslinis darbas", "Padas, Tadas", 2020, 150, 20.50);
console.log(knygaF.duomenys());

const saugyklaF = new SaugyklaF(
    new KnygaF("Labai rimtas mokslinis darbas", "Padas, Tadas", 2020, 150, 20.50),
    new KnygaF("Labai gražus romanas", "Rašytoja, Puiki", 2019, 120, 2.53)
);

saugyklaF.spausdinti();

/**
 *  Objektų kūrimas naudojant klases
*/

console.log("\nObjektų kūrimas per klases");

import { KnygaC, SaugyklaC } from './class.js';

const knygaC = new KnygaC("Labai rimtas mokslinis darbas", "Padas, Tadas", 2020, 150, 20.50);
console.log(knygaC.duomenys());

const saugyklaC = new SaugyklaC(
    new KnygaC("Labai rimtas mokslinis darbas", "Padas, Tadas", 2020, 150, 20.50),
    new KnygaC("Labai gražus romanas", "Rašytoja, Puiki", 2019, 120, 2.53)
);

saugyklaC.spausdinti();

/**
 * Objektų kūrimas naudojant Object metodus
 */

console.log("\nObjektų kūrimas per Object metodus");

import { KnygaL, SaugyklaL } from './object.js';

const knygaL = KnygaL("Labai rimtas mokslinis darbas", "Padas, Tadas", 2020, 150, 20.50);
console.log(knygaL.duomenys());

const saugyklaL = SaugyklaL(
    KnygaL("Labai rimtas mokslinis darbas", "Padas, Tadas", 2020, 150, 20.50),
    KnygaL("Labai gražus romanas", "Rašytoja, Puiki", 2019, 120, 2.53)
);

saugyklaL.spausdinti();
