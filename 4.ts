function getSumm(number: number): number {

    while(number != 1){

        return number + getSumm(--number);
    }
    return number;
}

function getFukt(number: number): number {

    while(number != 1){

        return number * getFukt(--number);
    }
    return number;
}

console.log(getFukt(6));
console.log(getSumm(6));