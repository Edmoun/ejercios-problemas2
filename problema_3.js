const input = 12;
const YARDS = 36;
const PIES = 12;

const yardas = Math.floor(input/YARDS);
const resto_yardas = input % YARDS;
const pies = Math.floor(resto_yardas/PIES);
const resto_pies = resto_yardas % PIES;

console.log(`Yardas ${yardas} Pies ${pies} Pulgadas ${resto_pies} `);

