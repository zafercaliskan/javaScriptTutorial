function getTheDivisorsOfTheNumber(number) {
    let divisorsOfNumbers = [];
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            divisorsOfNumbers.push(i);
        }
    }
    return divisorsOfNumbers;
}

function areTheseTwoNumbersFriends(number1, number2) {

    let divisorsOfThe_1stNumber = getTheDivisorsOfTheNumber(number1);
    let divisorsOf_2ndNumber = getTheDivisorsOfTheNumber(number2);

    console.log("Divisors Of The 1st Number: " + divisorsOfThe_1stNumber)
    console.log("Divisors Of 2nd Number: " + divisorsOf_2ndNumber)

    let sumOfDivisorsOf_1stNumber = divisorsOfThe_1stNumber.reduce((acc, p) => acc + p, 0);
    let sumOfDivisorsOf_2ndNumber = divisorsOf_2ndNumber.reduce((acc, p) => acc + p, 0);
    
    console.log("1st Number: " + number1)
    console.log("2nd Number: " + number2)
    console.log("Sum Of Divisors Of 1st Number: " + sumOfDivisorsOf_1stNumber)
    console.log("Sum Of Divisors Of 2nd Number: " + sumOfDivisorsOf_2ndNumber)

    if (number1 == sumOfDivisorsOf_2ndNumber && number2 == sumOfDivisorsOf_1stNumber) {
        console.log("Numbers given as parameters are friends.")
    }
    else {
        console.log("Numbers given as parameters are not friends.")
    }
}

areTheseTwoNumbersFriends(220, 284)