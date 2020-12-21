function getSeason(mounth: number): string {
    let name: string = 'noun';
    switch (mounth){
        case 1:
        case 2:
            name = 'Winter';
            break;
        case 3:
        case 4:
        case 5:
            name = 'Spring';
            break;
        case 6:
        case 7:
        case 8:
            name = 'Summer';
            break;
        case 9:
        case 10:
        case 11:
            name = 'Autumn';
            break;
        case 12:
            name = 'Winter';
            break;
    }
    return name;
}

console.log(getSeason(3));