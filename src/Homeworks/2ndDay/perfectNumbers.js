function getTheDivisorsOfTheNumber(number) {
    let divisorsOfNumbers = [];
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            divisorsOfNumbers.push(i);
        }
    }
    return divisorsOfNumbers;
}

let perfectNumbers = [];
for (let i = 1; i < 1000; i++) {
    let divisorsOfTheNumber = getTheDivisorsOfTheNumber(i);
    let total = divisorsOfTheNumber.reduce((acc, n) => acc + n, 0);

    if (total == i) {
        perfectNumbers.push(i);
    }
}

console.log("Perfect Numbers: " + perfectNumbers)