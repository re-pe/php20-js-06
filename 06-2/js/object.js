/**
 * Objektų kūrimas naudojant Object metodus
 */

const knygaPrototype = Object.assign(
    Object.create(KnygaL.prototype),
    {
        duomenys(antkainisProc = 0) {
            return `${this.autorius} (${this.leidimoMetai}).${this.pavadinimas}. Kaina: ${this.knygosKaina(antkainisProc)}. Puslapių: ${this.puslapiuSk}`;
        },

        knygosKaina(antkainisProc) {
            return this.kaina * (1 + antkainisProc / 100);
        },
    }
);

function KnygaL(pavadinimas, autorius, leidimoMetai, puslapiuSk, kaina) {
    return Object.assign(
        Object.create(knygaPrototype),
        {
            pavadinimas,
            autorius,
            leidimoMetai,
            puslapiuSk,
            kaina,
        }
    );
}

const saugyklaPrototype = Object.assign(
    Object.create(SaugyklaL.prototype),
    {
        spausdinti(antkainisProc = 0) {
            console.log("Knygų sąrašas:");
            this.knygos.forEach((knyga, indeksas) => {
                console.log(`${indeksas + 1}. ${knyga.duomenys(antkainisProc)}`);
            });
        }
    },
);

function SaugyklaL(...knygos) {
    return Object.assign(
        Object.create(saugyklaPrototype),
        {
            knygos,
        },
    );
}

export { KnygaL, SaugyklaL };