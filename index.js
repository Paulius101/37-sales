const Sales = require('./Sales.js');

const lessGo = new Sales();

lessGo.itraukiamISarasa('Toilet Bowl Night Light', 5, 1, 2);
lessGo.itraukiamISarasa('Sensory Fidget Toys Set', 5, 1, 2);
lessGo.itraukiamISarasa('The Official BS Button', 5, 1, 2);
lessGo.itraukiamISarasa('Glowing Ceiling Balls', 5, 1, 2);
lessGo.itraukiamISarasa('Jorbest Burritos Blanket', 7, 2, 4);

lessGo.rodykKaTuri();
/*
1. 5 Toilet Bowl Night Light uz 1 eura.
2. 5 Sensory Fidget Toys Set uz 1 eura.
3. 5 The Official BS Button uz 1 eura.
4. 5 Glowing Ceiling Balls uz 1 eura
5. 5 Jorbest Burritos Blanket uz 2 eurus.
*/

lessGo.kiekIsleidau();
//Is viso isleista: 34.00 eu.


lessGo.pardavimas('Glowing Ceiling Balls', 3);
lessGo.pardavimas('The Official BS Button', 2);
lessGo.pardavimas('Jorbest Burritos Blanket', 5);


lessGo.kiekUzdirbau();
//Is viso uzdirbta: 30 eu.

lessGo.vidutinisPrekiuAntkainis();