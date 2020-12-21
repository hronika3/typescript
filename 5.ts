function getMultiplicationTable(number: number): void {
    for (let i: number = 1; i < 11; i++){
        console.log(number + ' * ' + i + ' = ' + (number * i));
    }
}

getMultiplicationTable(178);