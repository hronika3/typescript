function getDayDeclension(day: number): string {
    let declension: string = '';
    if (((day % 10) == 1) && ((day % 100) != 11)){
        declension = 'День';
    }
    else if ((((day % 10) == 2) || ((day % 10) == 3) || ((day % 10) == 4)) && (((day % 100)  <= 11) || ((day % 100) >= 20))){
        declension = 'Дня';
    }
    else {
        declension = 'Дней'
    }
    return declension;
}

console.log(getDayDeclension(0));