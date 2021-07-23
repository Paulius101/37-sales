class Sales {
    constructor() {
        this.sarasas = []
        this.parduoti = 0;

    }

    itraukiamISarasa(preke, kiekis, pirkimoKaina, pardavimoKaina) {
        this.sarasas.push({
            pavadinimas: preke,
            kiekis: kiekis,
            pirkimoKaina: pirkimoKaina,
            pardavimoKaina: pardavimoKaina
        })
        console.log(this.sarasas);
    }

    rodykKaTuri() {
        for (let i = 0; i < this.sarasas.length; i++) {
            const entry = this.sarasas[i];
            if (entry.pirkimoKaina === 1) {
                console.log(`${i + 1}. ${entry.kiekis} ${entry.pavadinimas} uz ${entry.pirkimoKaina} eura`);
            }
            else {
                console.log(`${i + 1}. ${entry.kiekis} ${entry.pavadinimas} uz ${entry.pirkimoKaina} eurus`);
            }
        }
    }

    kiekIsleidau(notification = true) {
        let islaidos = 0;
        for (const entry of this.sarasas) {
            islaidos += entry.kiekis * entry.pirkimoKaina
        }
        if (notification === true) { console.log(`Is viso isleista: ${islaidos.toFixed(2)} eu.`); }
        return islaidos
    }


    pardavimas(preke, kiekis) {
        for (let i = 0; i < this.sarasas.length; i++) {
            if (preke === this.sarasas[i].pavadinimas) {
                this.parduoti += this.sarasas[i].pardavimoKaina * kiekis;

            }
        }
    }

    kiekUzdirbau() {
        console.log(`Is viso uzdirbta: ${this.parduoti.toFixed(2)} eu.`);
    }

    vidutinisPrekiuAntkainis() {
        let uzdarbis = 0;
        let pardavimoKiekis = 0;
        for (let i = 0; i < this.sarasas.length; i++) {
            const element = this.sarasas[i];
            uzdarbis += element.pardavimoKaina * element.kiekis;
            pardavimoKiekis += element.kiekis;
        }
        let skirtumas = uzdarbis - this.kiekIsleidau(false);

        let antkainis = skirtumas / pardavimoKiekis;
        console.log(`Vidutinis prekiu antkainis: ${antkainis.toFixed(2)} eu.`);
    }

}

module.exports = Sales;