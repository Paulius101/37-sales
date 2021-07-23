class Sales {
    constructor() {
        this.sarasas = []
    }

    itraukiamISarasa(preke, kiekis, kaina) {
        this.sarasas.push({
            pavadinimas: preke,
            kiekis: kiekis,
            kaina: kaina
        })
        console.log(this.sarasas);
    }

    rodykKaTuri() {
        for (let i = 0; i < this.sarasas.length; i++) {
            const entry = this.sarasas[i];
            if (entry.kaina === 1) {
                console.log(`${i + 1}. ${entry.kiekis} ${entry.pavadinimas} uz ${entry.kaina} eura`);
            }
            else {
                console.log(`${i + 1}. ${entry.kiekis} ${entry.pavadinimas} uz ${entry.kaina} eurus`);
            }
        }
    }

    kiekIsleidau() {
        let islaidos = 0;
        for (const entry of this.sarasas) {
            islaidos += entry.kiekis * entry.kaina
        }
        console.log(`Is viso isleista: ${islaidos.toFixed(2)} eu.`);
    }

    pardavimas() {

    }


    kiekUzdirbau() {
        console.log();
    }

    vidutinisPrekiuAntkainis() {


    }

}

module.exports = Sales;