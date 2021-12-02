const mediaArmonica = (a, b) => {

    const aI = 1 / a;
    const bI = 1 / b;
    const prom = (aI + bI) / 2;

    return 1 / prom;
}


console.log(mediaArmonica(6, 9));