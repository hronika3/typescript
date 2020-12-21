function addMinutes(hour: number, minute: number, increase: number): string{
    let time: string = "";
    while((minute + increase) > 59){
        hour++;
        minute -= 60;
    }
    minute += increase;
    while(hour > 23){
        hour -= 24;
    }
    if(hour < 10) {
        time += '0' + hour + ":";
    }
    else{
        time += hour + ":";
    }
    if(minute < 10){
        time += '0' + minute;
    }
    else{
        time += minute + ":";
    }
    return time;
}

console.log(addMinutes(3,35,10));