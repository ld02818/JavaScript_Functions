function printOdds(count){
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
        console.log(i);
            
        
        }
    }
}
printOdds(9);
console.log("EXERCISE 1:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive`;
    let belowSixteen = `Sorry ${userName}, but u need to wait`;

    if (age < 16){
        console.log(belowSixteen);
    }else if(age >= 16){
        console.log(aboveSixteen);
        }
    }
    checkAge("Luke", 18);

    

function findQuadrant(x, y){
    if (x > 0 && y > 0){
        return "Quadrant 1";
}else if (x < 0 && y > 0){
    return "Quadrant 2";
}else if (x < 0 && y < 0){
    return "Quadrant 3";
}else if (x > 0 && y < 0){
    return "Quadrant 4";
}else if (x == 0 && y != 0){
    return "X Axis";
}else if(x != 0 && y == 0){
    return "Y axis";
} else {
    return "Origin";
}
}

console.log(findQuadrant(1, 1));
console.log(findQuadrant(-1, 1));
console.log(findQuadrant(-1, -1));
console.log(findQuadrant(1, -1));
console.log(findQuadrant(0, -1));
console.log(findQuadrant(1, 0));
console.log(findQuadrant(0, 0));

function isValidTriangle(a, b, c){
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c){
    let isValid = isValidTriangle(a, b, c);
    if(isValid){
        if(a == b && b == c){
            return "Equilateral";
        }else if(a == b || b == c || a == c){
            return "isoceles";
        }else{
            return "Scalene";
        }
    }else{
        return "not a valid triangle";
    }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));

function dataUsageFeedback(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let statusMsg;
    let projectedUsage = remainingDays - currentAvg;

console.log(`${day} day(s) used, ${remainingDays} days(s) remaining`);
console.log(`average projected use: ${projectedAvg} GB/day`);

if(currentAvg > projectedAvg){
    statusMsg = "EXCEEDING";
}else if (currentAvg < projectedAvg){
    statusMsg = "UNDER";
}else{
    statusMsg = "AT";
}
console.log( `you are ${statusMsg}your average daily use (${currentAvg} GB/day),
continuing this high usage, youll end up using ${planLimit - (usage + projectedUsage)} GB from your data limit.`);

}
dataUsageFeedback(50, 12, 25);