function Restoranas(pavadinimas, vietuSk) {
    this.pavadinimas = pavadinimas;
    this.vietuSk = vietuSk;
    this.rezervuotaVietu = 0;
    this.laisvuVietu = () => {
        return this.vietuSk - this.rezervuotaVietu;
    }
    this.rezervuotiVietas = (vietuSk) => {
        const laisvuVietu = this.laisvuVietu();
        if (laisvuVietu < vietuSk) {
            console.log(`Laisvų vietų: ${laisvuVietu}. Norima rezervuoti: ${vietuSk}. Rezervacijai vietų nepakanka!`);
            return;
        }
        this.rezervuotaVietu += vietuSk;
    }
    this.atsauktiVietas = (vietuSk) => {
        const rezevuotaVietu = this.rezervuotaVietu;
        if (rezevuotaVietu < vietuSk) {
            console.log(`Rezervuotų vietų: ${rezevuotaVietu}. Norima rezervuoti: ${vietuSk}. Norima atšaukti rezervaciją daugiau vietų nei yra rezervuotų!`);
            return;
        }
        this.rezervuotaVietu -= vietuSk;
    } 
}

const restoranas = new Restoranas("Žuvėdra", 20);
console.log(`Restoranas „${restoranas.pavadinimas}“. Vietų skaičius: ${restoranas.vietuSk}. Rezervuota vietų: ${restoranas.rezervuotaVietu}.`);

restoranas.rezervuotiVietas(5);
console.log(`Restoranas „${restoranas.pavadinimas}“. Rezervuota vietų: ${restoranas.rezervuotaVietu}.`);

restoranas.rezervuotiVietas(20);
console.log(`Restoranas „${restoranas.pavadinimas}“. Rezervuota vietų: ${restoranas.rezervuotaVietu}.`);

restoranas.rezervuotiVietas(15);
console.log(`Restoranas „${restoranas.pavadinimas}“. Rezervuota vietų: ${restoranas.rezervuotaVietu}.`);

restoranas.atsauktiVietas(30);
console.log(`Restoranas „${restoranas.pavadinimas}“. Rezervuota vietų: ${restoranas.rezervuotaVietu}.`);

restoranas.atsauktiVietas(20);
console.log(`Restoranas „${restoranas.pavadinimas}“. Rezervuota vietų: ${restoranas.rezervuotaVietu}.`);
