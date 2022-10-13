const isLeap = (year) => {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0); 
};
const LeapYear = (Y, N) =>{
    const arr = [];
    while(arr.length < N) {
        if(isLeap(Y++)){
            arr.push(Y-1)
        }
    }
    return arr;
}

console.log(LeapYear(2020, 3))