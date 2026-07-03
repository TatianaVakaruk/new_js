const multiRound = (num, pres) => {
    let floor = Math.floor(num * (10 ** pres)) / (10 ** pres);
    let trunc = Math.trunc(num * (10 ** pres)) / (10 ** pres);
    let ceil = Math.ceil(num * (10 ** pres)) / (10 ** pres);
    let round = Math.round(num * (10 ** pres)) / (10 ** pres);
    let toFixed = +num.toFixed(pres);
    return [floor, trunc, ceil, round, toFixed];
    };
    console.log(multiRound(3.4567, 2));
    console.log(multiRound(3.2316, 3));
    console.log(multiRound(2.987, 1));

