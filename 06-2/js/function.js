/**
 * Tradicinis objektų kūrimas naudojant funkcijas
*/

function KnygaF (pavadinimas, autorius, leidimoMetai, puslapiuSk, kaina) {
    this.pavadinimas = pavadinimas;
    this.autorius = autorius;
    this.leidimoMetai = leidimoMetai;
    this.puslapiuSk = puslapiuSk;
    this.kaina = kaina;

    this.duomenys = (antkainisProc = 0) => {
        return `${this.autorius} (${this.leidimoMetai}).${this.pavadinimas}. Kaina: ${this.knygosKaina(antkainisProc)}. Puslapių: ${this.puslapiuSk}`;
    };

    this.knygosKaina = (antkainisProc) => {
        return this.kaina * (1 + antkainisProc / 100);
    };
};

function SaugyklaF (...knygos) {
    this.knygos = knygos;
    this.spausdinti = (antkainisProc = 0) => {
        console.log("Knygų sąrašas:");
        this.knygos.forEach((knyga, indeksas) => {
            console.log(`${indeksas + 1}. ${knyga.duomenys(antkainisProc)}`);
        });
    };
};

export { KnygaF, SaugyklaF };