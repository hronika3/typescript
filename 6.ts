function isPointCircle(x: number, y: number): boolean {
    if (((x-3)*(x-3)+(y-5)*(y-5))<=16) {
        return true;
    }
    return false;
}

console.log(isPointCircle(4, 2));

function isPointQuadrilateral (x: number, y: number): boolean{
    if((x >= ((7*y -28) / 4)) && (x>=((8*y + 96) / -12)) && (x <= ((15 - 5*y) / 3)) && (x <= ((5*y + 10) / 2))){
        return true;
    }
    return false;
}

console.log(isPointQuadrilateral(0,0));